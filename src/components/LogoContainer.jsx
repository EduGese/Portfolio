import { Box, Typography } from '@mui/material';

export  const LogoContainer = ({href, svg, figCaption}) =>{


    return(
      <a href={href}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0',
          padding: '0',
          width: {
            xs: '60px', 
            sm: '100px', 
            md: '10vw', 
            lg: '10vw', 
          },
          height: {
            xs: '60px',
            sm: '100px',
            md: '10vw',
            lg: '10vw',
          },
          maxWidth: '10vh',
          maxHeight: '10vh',
          position: 'relative',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.2)',  
          },
        }}
      >
        {svg}
        <Typography variant="caption" component="figcaption">
          {figCaption}
        </Typography>
      </Box>
    </a>
    )
}