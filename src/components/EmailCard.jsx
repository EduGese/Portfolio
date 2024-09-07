import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import EmailIcon from '@mui/icons-material/Email';

export const EmailCard = ()=>{
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: 'background.paper',
            borderRadius: '10px',
            boxShadow: 3,
            marginBottom: '40px',
            marginLeft: { xs: '0px', sm: '0px', md: '100px', lg: '200px' }
            
          }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
              Let's Connect!
            </Typography>
  
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px' }}>
              <EmailIcon sx={{ fontSize: '40px', color: 'primary.main' }} />
              <Typography variant="body1" sx={{ fontSize: '18px', fontStyle: 'italic' }}>
                Feel free to reach out via email at
              </Typography>
            </Box>
  
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', marginTop: '8px' }}>
              eddugonz@gmail.com
            </Typography>
          </Box>
    )
}