import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';


export default function ProjectCard({ name, image, description, technologies, ghLink, demoLink, websiteLink, gif,  }) {
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
      borderRadius: '50px',
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
        transition: 'background-image 1.2s ease-in-out',
       }}
      image={isHovered && gif ? gifUrl : image}
      title={name}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
      <CardContent sx={{
        height: {
          xs: '230px',
          sm: '200px'
        }
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
          justifyContent: 'end',
          flexWrap: 'wrap',
          padding: '10px 0',
        }}>
          {technologies.map((tech, index) => (
            <a href={tech.href} key={index} >
              <figure style={{ margin: '0 5px', width: '30px', height: '30px' }}>
              {tech.svg}
            </figure>
            </a>
            
          ))}
        </Box>
        <Divider sx={{
          width: '100%', 
          margin: '10px 0',
          color: 'rgba(0, 0, 0, 0.6)', 
          fontSize: '14px'
        }}>
          +info
        </Divider>
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start'
        }}>
          <Button size="small">
            <a href={ghLink}>
              <GitHubIcon sx={{color:'black'}}/>
            </a>
            
          </Button>
          {
          demoLink && <Button size="small"><a href={demoLink}><VideocamOutlinedIcon /></a></Button>
          }
          {
            websiteLink && <Button size="small"><a href={websiteLink}><LanguageOutlinedIcon /></a></Button>
          }
        </Box>
      </CardActions>
    </Card>
  );
}
