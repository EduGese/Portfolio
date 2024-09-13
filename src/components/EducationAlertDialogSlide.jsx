import * as React from 'react';
import { Box, Paper, Typography, Avatar, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Button  } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { mainEducation } from '../constants/education';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

export const EducationAlertDialogSlide = () => {
    const otherEducation = mainEducation.slice(1);
    const [open, setOpen] = React.useState(false);

    const subtitle = 'These experiences have broadened my skill set, providing me with critical thinking, communication, and teamwork abilities that complement my technical expertise as a developer'

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" color="warning" onClick={handleClickOpen}>
                More education
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Beyond the code"}</DialogTitle>
                <DialogContent>
                    <Typography variant="body2" >
                    {subtitle}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: 'fit-content',
                            flexWrap: 'wrap',
                            overflowX: 'hidden',
                        }}
                    >
                        {otherEducation.map((education, index) => (
                            <Box key={index} sx={{ 
                                width: '100%', 
                                maxWidth: '560px', 
                                borderRadius: '50px', 
                                margin: '20px 0', 
                                padding: '20px', 
                                display: 'flex', 
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '20px' 
                              }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                  <a href={education.link}>
                                    <Avatar
                                      alt={education.center}
                                      src={education.avatar}
                                      sx={{
                                        width: { xs: '80px', sm: '100px' },
                                        height: { xs: '80px', sm: '100px' },
                                        border: '1px solid grey',
                                        marginBottom: { xs: '10px', sm: '0' }
                                      }}
                                    />
                                  </a>           
                                </Box>
                                <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, width: '100%' }}>
                                  <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                    {education.title}
                                  </Typography>
                                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                                    {education.center}
                                  </Typography>
                                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                                    {education.date} | {education.location}
                                  </Typography>
                                  <Typography variant="body2" sx={{ marginTop: '10px', color: 'text.secondary' }}>
                                    {education.description}
                                  </Typography>
                                </Box>
                              </Box>
                        ))}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}><CancelIcon /></Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}