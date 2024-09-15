import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send';
import ReCAPTCHA from 'react-google-recaptcha'; 

export default function Mailer({visibleText}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);


  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    // if (!captchaValue) {
    //   setError('Please complete the CAPTCHA');
    //   return;
    // }

    fetch("https://formcarry.com/s/K5U1KeaYlKh", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        setSuccess(true);
        setError('');
        setName('');
        setEmail('');
        setMessage(''); 
        setTimeout(() => setSuccess(false), 3000);
      } else if (response.code === 422) {
        setError(response.message);
        setSuccess(false);
      } else {
        setError(response.message);
        setSuccess(false);
      }
    })
    .catch(error => {
      setError(error.message ? error.message : error);
      setSuccess(false);
    });
  }

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: {
          xs: '80%', 
          sm: '80%',  
          md: '40%',  
          lg: '40%',  
        },
         margin: '0 auto',
        padding: '20px',
        bgcolor: 'background.paper',
        borderRadius: '50px',
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        {visibleText.mailerTitle}
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert severity="success" icon={<CheckIcon fontSize="inherit" />}
         sx={{ mb: 2, position: 'fixed', 
          bottom: '20px', 
          right: '20px', 
          zIndex: 1000, 
          width: 'auto' }}>
          {visibleText.confirmationMessage}
        </Alert>
      )}

      <TextField
        label={visibleText.formLabelName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      <TextField
        label={visibleText.formLabelEmail}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      <TextField
        label={visibleText.formLabelMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={4}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      {/* <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY" 
        onChange={(value) => setCaptchaValue(value)} 
        sx={{ mb: 2 }}
      /> */}
          <Box sx={{marginTop:'10px'}}>
              <Button type="submit" variant="contained" color="primary" startIcon={<SendIcon />} sx={{  width: '100%', margin: '0 5px ', borderRadius:'50px' }}>
              {visibleText.buttonSend}
              </Button>
          </Box>
      
    </Box>
  );
}
