import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export const EmailCard = () => {
  const email = 'eddugonz@gmail.com';
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); 
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      marginBottom: '40px',
      marginLeft: { xs: '0px', sm: '0px', md: '100px', lg: '200px' }
    }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Let's Connect!
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px' }}>
        <EmailIcon color='warning' sx={{ fontSize: '40px' }} />
        <Typography variant="body1" color='warning' sx={{ fontSize: '18px', fontStyle: 'italic' }}>
          {email}
        </Typography>
        <Tooltip title="Copy email">
          <IconButton onClick={handleCopy} >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {showAlert && (
        <Alert 
          icon={<CheckIcon fontSize="inherit" />} 
          severity="success"
          sx={{ 
            position: 'fixed', 
            bottom: '20px', 
            left: '20px', 
            zIndex: 1000, 
            width: 'auto'
          }}
        >
          Email successfully copied to clipboard!
        </Alert>
      )}
    </Box>
  );
};
