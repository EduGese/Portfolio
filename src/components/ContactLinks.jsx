import { Box, IconButton } from '@mui/material'; 


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

export const ContactLinks = ()=>{

    return(
        <Box sx={{
            // margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            
            marginBottom: '40px',
            marginLeft: { xs: '0px', sm: '0px', md: '100px', lg: '200px' }
          }}>

              <IconButton href="https://wa.me/+34689262614">
              <WhatsAppIcon fontSize="large"/>
            </IconButton>
            <IconButton href="https://t.me/Odardue">
              <TelegramIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/eduardo-gonz%C3%A1lez-seco-0938a2a4/">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://github.com/EduGese">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
    )
}