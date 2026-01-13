import { Box, Typography } from '@mui/material';

export  const LogoContainer = ({href, svg, figCaption, transition}) =>{


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
      '& svg': {
        transition: transition ? 'all 0.3s ease-in-out' : 'none', 
      },
      '&:hover svg': transition
        ? {
            transform: 'scale(1.2)',
            filter: 'drop-shadow(0 8px 12px var(--purple-background))',
          }
        : {},
    }}
  >
    {svg}
    <Typography variant="caption" component="figcaption" sx={{whiteSpace:'nowrap', color: 'white'}}>
      {figCaption}
    </Typography>
  </Box>
</a>
    )
}