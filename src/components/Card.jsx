import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../css/card.css'
import githubPng from '../assets/icons8-github-30.png'
import Box from '@mui/material/Box';

export default function MediaCard({ name, image, description, technologies, ghLink, demoLink, websiteLink, gif, gifOrientation }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [gifUrl, setGifUrl] =  React.useState(gif);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setGifUrl(`${gif}?${Date.now()}`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setGifUrl(gif);
  };
  return (
    <Card sx={{
      width: '100%',
      maxWidth: { xs: '100%', sm: 345 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '10px',
      boxSizing: 'border-box',
      flex: '1 1 calc(100% - 20px)',
      '@media (min-width: 600px)': {
        flex: '1 1 calc(50% - 20px)',
      },
      '@media (min-width: 960px)': {
        flex: '1 1 calc(33.33% - 20px)',
      }
    }}>
      <CardMedia
      sx={{
        height: 140,
        transition: 'background-image 0.7s ease-in-out',
        // objectFit: gifOrientation === 'portrait' ? 'cover' : 'contain',
        // objectPosition: 'center',
       }}
      image={isHovered && gif ? gifUrl : image}
      title={name}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
      <CardContent sx={{
        height: '40%'
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '10px 0',
        }}>
          {technologies.map((tech, index) => (
            <figure key={index} style={{ margin: '0 5px', width: '30px', height: '30px' }}>
              {tech.svg}
            </figure>
          ))}
        </Box>
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start'
        }}>
          <Button size="small">
            <a href={ghLink}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg></a>

          </Button>
          {
          demoLink && <Button size="small"><a href={demoLink}>Demo</a></Button>
          }
          {/* <Button size="small"><a href={demoLink}>demo</a></Button> */}
          {
            websiteLink && <Button size="small"><a href={websiteLink}>Website</a></Button>
          }
        </Box>
      </CardActions>
    </Card>
  );
}
