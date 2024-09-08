import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send';
// import ClearIcon from '@mui/icons-material/Clear';
import ReCAPTCHA from 'react-google-recaptcha'; 

export default function BasicForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  // const clearForm = (e) =>{
  //   e.preventDefault(); 
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  //   setError('');
  //   setSuccess(false);
  //   setCaptchaValue(null);
    
  // }

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!captchaValue) {
      setError('Please complete the CAPTCHA');
      return;
    }

    fetch("https://formcarry.com/s/K5U1KeaYlKh", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message, captcha: captchaValue })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        // Mostrar mensaje de éxito
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
        // Otro error de formcarry
        setError(response.message);
        setSuccess(false);
      }
    })
    .catch(error => {
      // Error relacionado con la solicitud.
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
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Send me a message
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert severity="success" icon={<CheckIcon fontSize="inherit" />} sx={{ mb: 2, width: '100%' }}>
          We received your submission, thank you!
        </Alert>
      )}

      <TextField
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      <TextField
        label="Your Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      <TextField
        label="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={4}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY" // Reemplaza con tu clave del sitio
        onChange={(value) => setCaptchaValue(value)} // Maneja el valor del CAPTCHA
        sx={{ mb: 2 }}
      />
          <Box sx={{marginTop:'10px'}}>
              <Button type="submit" variant="contained" color="primary" startIcon={<SendIcon />} sx={{  width: '100%', margin: '0 5px ' }}>
                  Send
              </Button>
              {/* <Button type="button" variant="contained" color="secondary" startIcon={<ClearIcon />} sx={{ width: '40%', margin: '0 5px ' }} onClick={clearForm}>
                  Clear
              </Button> */}
          </Box>
      
    </Box>
  );
}
