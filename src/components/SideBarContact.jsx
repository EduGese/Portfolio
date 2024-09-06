import { Drawer, IconButton, List, ListItem } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

export const SideBarContact = () => {
    return (
        <Drawer className='drawer'
        variant="permanent"
        anchor="right" 
        sx={{
          position: 'absolute', 
          right: 0, 
          top: '50%', // Centrado verticalmente
          transform: 'translateY(-50%)', 
          width: '80px',
          height: 'auto',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '80px',
            height: 'auto', 
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            borderRadius: '10px 0 0 10px', 
          },

        }}
      >
        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ListItem>
            <IconButton href="https://wa.me/+34689262614">
              <WhatsAppIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton href="https://t.me/Odardue">
              <TelegramIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton href="https://www.linkedin.com/in/eduardo-gonz%C3%A1lez-seco-0938a2a4/">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton href="https://github.com/EduGese">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    )
}