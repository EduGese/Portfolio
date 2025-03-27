import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';





export default function ProjectCard({ name, image, description, technologies, ghLink, demoLink, websiteLink, gif }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [gifUrl, setGifUrl] = React.useState(gif);

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
      backgroundColor: '#FAFAFA',
      flex: '1 1 calc(100% - 20px)',
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: 8,
      },
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
        image={gif ? gif : image}
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
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 16px 16px',
      }}>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          padding: '8px 0',
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



        <ButtonGroup size="small" aria-label="Small button group" sx={{
          borderRadius: 50,
        }}>
          {demoLink && <Button
            variant="outlined"
            color='warning'
            href={demoLink}
            startIcon={<VideocamOutlinedIcon />}
            sx={{
              borderRadius: 50,
              transition: 'all 0.5s ease',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.warning.main,
                color: '#fff',
                borderColor: (theme) => theme.palette.warning.main
              }
            }}
          >
            Demo
          </Button>
          }

          {websiteLink && <Button
            variant="outlined"
            color='info'
            href={websiteLink}
            startIcon={<LanguageOutlinedIcon />}
            sx={{
              borderRadius: 50,
              transition: 'all 0.5s ease',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.info.main,
                color: '#fff',
                borderColor: (theme) => theme.palette.info.main
              }
            }}
          >
            Website
          </Button>
          }
          {ghLink && <Button
            variant="outlined"
            color='success'
            href={ghLink}
            startIcon={<GitHubIcon />}
            sx={{
              borderRadius: 50,
              transition: 'all 0.5s ease',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.success.main,
                color: '#fff',
                borderColor: (theme) => theme.palette.success.main
              }
            }}
          >
            Github
          </Button>
          }

        </ButtonGroup>

      </CardActions>
    </Card>
  );
}
