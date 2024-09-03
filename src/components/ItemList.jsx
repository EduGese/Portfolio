import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { mainEducation } from '../constants/education';
import Paper from '@mui/material/Paper';


export const ItemsList = () => {
  return (
    <List sx={{
      width: '100%',
      maxWidth: 560,
      height: '80vh',
      bgcolor: 'background.paper',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {
        mainEducation.map((education, index) => (
          <React.Fragment key={index}>
            <Paper elevation={3} sx={{ width: '100%', borderRadius: '20px', margin: '20px 0' }}>
              <ListItem alignItems="center" >
                <ListItemAvatar>
                  <a href={education.link}>
                    <Avatar alt={education.center} src={education.avatar} sx={{ border: '1px solid grey' }} />
                  </a>
                </ListItemAvatar>
                <ListItemText
                  primary={education.title}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: '20px', 
                      fontWeight: 'bold' 
                    }
                  }}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        {education.center}
                      </Typography>
                      <Typography
                        component="span"  
                        variant="body2"
                        sx={{ color: 'text.secondary', display: 'block' }}
                      >
                        {education.date} | {education.location}
                      </Typography>

                    </React.Fragment>
                  }
                />
              </ListItem>
            </Paper>

            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))
      }
    </List>
  );
}
