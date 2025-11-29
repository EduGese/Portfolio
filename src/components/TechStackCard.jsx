import { Grid2, Paper, Typography, Box } from '@mui/material';
import { LogoContainer } from '../components/LogoContainer';


export const TechStackCard = ({ 
  title, 
  logos, 
  gridSize = { xs: 10, sm: 10, md: 10, lg: 5, xl: 5 },
  minHeight = '300px',
  enableFlexGrow = true
}) => {
  return (
    <Grid2 size={gridSize}>
      <Paper
        elevation={24}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          height: '100%',
          minHeight: minHeight,
          flexGrow: enableFlexGrow ? 1 : 0,
          borderRadius: '50px',
          backgroundColor: 'var(--card-dark-1)',
          '@media (max-width: 1024px) and (orientation:landscape)': {
            minHeight: '0',
          },
        }}
      >
        <Typography 
          variant="h5" 
          component="h5" 
          sx={{ 
            backgroundColor: "#33303002", 
            color: 'var(--accent)',
            borderRadius: "50px", 
            padding: "5px 10px", 
            textAlign: "center", 
            width: "100%" ,
            // border: '1px solid var(--accent)'
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            paddingTop: '20px',
            '@media (max-width: 1024px) and (orientation:landscape)': {
              gap: '50px',
            },
          }}
        >
          {logos.map((logo, index) => (
            <LogoContainer 
              key={index} 
              href={logo.href} 
              svg={logo.svg} 
              figCaption={logo.figCaption} 
              transition={true} 
            />
          ))}
        </Box>
      </Paper>
    </Grid2>
  );
};
