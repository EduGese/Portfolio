import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send';

export default function Mailer({ visibleText }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Validaciones adicionales del lado del cliente
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!name || !email || !message) {
      setError('Todos los campos son obligatorios');
      return false;
    }
    if (!validateEmail(email)) {
      setError('Por favor, introduce un correo electrónico válido');
      return false;
    }
    if (message.length > 1000) {
      setError('El mensaje no puede superar los 1000 caracteres');
      return false;
    }
    return true;
  };

  const sanitizeInput = (input) => {
    const sanitized = input.replace(/<[^>]*>?/gm, ''); 
    return sanitized;
  };

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!validateForm()) {
      return;
    }

    const sanitizedMessage = sanitizeInput(message);
    const sanitizedName = sanitizeInput(name);

    fetch('https://formcarry.com/s/K5U1KeaYlKh', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: sanitizedName,
        email,
        message: sanitizedMessage,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSuccess(true);
          setError('');
          setName('');
          setEmail('');
          setMessage('');
          setTimeout(() => setSuccess(false), 3000);
        } else if (response.code === 422) {
          setError('Por favor, revisa los datos enviados');
          setSuccess(false);
        } else {
          setError('Error en el envío, inténtelo de nuevo más tarde');
          setSuccess(false);
        }
      })
      .catch((error) => {
        setError('Hubo un problema con el servidor, inténtalo más tarde');
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
        backgroundColor: '#FAFAFA',
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
        <Alert
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          sx={{
            mb: 2,
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            width: 'auto',
          }}
        >
          {visibleText.confirmationMessage}
        </Alert>
      )}

      <TextField
        label={visibleText.formLabelName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2, backgroundColor: '#ffff' }}
      />

      <TextField
        label={visibleText.formLabelEmail}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2, backgroundColor: '#ffff' }}
      />

      <TextField
        label={visibleText.formLabelMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={4}
        fullWidth
        required
        sx={{ mb: 2, backgroundColor: '#ffff' }}
      />

      <Box sx={{ marginTop: '10px' }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          sx={{ width: '100%', margin: '0 5px ', borderRadius: '50px' }}
        >
          {visibleText.buttonSend}
        </Button>
      </Box>
    </Box>
  );
}
