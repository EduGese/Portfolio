import { Box, IconButton } from '@mui/material'; 


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import Divider from '@mui/material/Divider';

export const ContactLinks = ()=>{

    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '50%',
            marginBottom: '40px',
          }}>

              <IconButton href="https://wa.me/+34689262614" sx={{ transition: 'color 0.3s, transform 0.2s', '&:hover': { color: '#30D14E', transform: 'scale(1.2)' } }}>
              <WhatsAppIcon fontSize="large"/>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton href="https://t.me/Odardue" sx={{ transition: 'color 0.3s, transform 0.2s', '&:hover': { color: '#279DDA', transform: 'scale(1.2)' } }}>
              <TelegramIcon fontSize="large" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton href="https://www.linkedin.com/in/eduardo-gonz%C3%A1lez-seco-0938a2a4/" sx={{ transition: 'color 0.3s, transform 0.2s', '&:hover': { color: '#0077B5', transform: 'scale(1.2)' } }}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton href="https://github.com/EduGese" sx={{ transition: 'color 0.3s, transform 0.2s', '&:hover': { color: '#000000', transform: 'scale(1.2)' } }}>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
    )
}