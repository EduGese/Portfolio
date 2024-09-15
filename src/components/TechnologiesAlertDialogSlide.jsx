import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { othersLogos } from '../constants/logo';
import { Button, Box } from '@mui/material';
import { LogoContainer } from '../components/LogoContainer';
import CancelIcon from '@mui/icons-material/Cancel';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const TechnologiesAlertDialogSlide = ({visibleText}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="warning" sx={{ borderRadius: '50px'}} onClick={handleClickOpen}>
        {visibleText.techDialogButtonTitle}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{visibleText.techDialogTitle}</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: 'fit-content',
              flexWrap: 'wrap',
              overflowX: 'hidden',
            }}
          >
            {othersLogos.map((logo, index) => (
              <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} transition={false} />
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