import { Box, Typography, Link } from '@mui/material';


export const Footer = ({ visibleText }) => {

  return (
    <Box
      sx={{
        height: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        // marginTop: '20px',
        // backgroundColor: 'background.default',
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography variant="body2" align="center" sx={{color:'var(--light)'}}>{visibleText.footerText.part1} </Typography>
        <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 5px ',color:'var(--light)' }}>
          <a href="https://es.react.dev/">
            <img
              src="/assets/react.svg"
              alt="React Logo"
              style={{ width: '24px', marginRight: '5px' }}
            />
          </a>
          +
          <a href="https://mui.com/material-ui/">
            <img
              src="/assets/materialui.svg"
              alt="Material UI Logo"
              style={{ width: '24px', marginLeft: '5px' }}
            />
          </a>
        </Box>
        <Typography variant="body2" align="center" sx={{color:'var(--light)'}}> {visibleText.footerText.part2} Eduardo González Seco</Typography>
      </Box>
    </Box>
  )
}