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
import DataObjectIcon from '@mui/icons-material/DataObject';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { pink } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';



export default function ProjectCard({ name, image, description, technologies, ghLink, demoLink, websiteLink, gif, swaggerDoc, deepWiki, storybookLink }) {
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
  const buttonConfigs = [
    {
      key: 'demo',
      prop: demoLink,
      description: 'Watch live demo of the application',
      label: 'Demo',
      icon: <VideocamOutlinedIcon />,
      color: 'warning',
      hoverColor: (theme) => theme.palette.warning.main
    },
    {
      key: 'website',
      prop: websiteLink,
      description: 'Visit the live website',
      label: 'Web',
      icon: <LanguageOutlinedIcon />,
      color: 'info',
      hoverColor: (theme) => theme.palette.info.main
    },
    {
      key: 'github',
      prop: ghLink,
      description: 'View source code on GitHub',
      label: 'Github',
      icon: <GitHubIcon />,
      color: 'success',
      hoverColor: (theme) => theme.palette.success.main
    },
    {
      key: 'api',
      prop: swaggerDoc,
      description: 'Explore Swagger API documentation',
      label: 'API Doc',
      icon: <DataObjectIcon style={{ width: 24, height: 24 }} />,
      color: 'success',
      hoverColor: (theme) => theme.palette.success.main
    },
    {
      key: 'storybook',
      prop: storybookLink,
      description: 'Browse UI components in Storybook',
      label: 'Storybook',
      icon: <AutoStoriesIcon style={{ width: 24, height: 24 }} />,
      customStyle: {
        borderRadius: 50,
        transition: 'all 0.3s ease',
        color: pink[500],
        borderColor: pink[500],
        '& .MuiSvgIcon-root': {
          color: pink[500],
        },
        '&:hover': {
          backgroundColor: pink[500],
          color: '#fff',
          borderColor: pink[500],
          '& .MuiSvgIcon-root': {
            color: '#fff',
          }
        }
      }
    },
    {
      key: 'wiki',
      prop: deepWiki,
      description: 'Read detailed documentation and guides',
      label: 'Deep Wiki',
      icon: <ArticleOutlinedIcon style={{ width: 24, height: 24 }} />,
      color: 'success',
      hoverColor: (theme) => theme.palette.success.main
    }
  ];
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
          gap: '4px',
          padding: '8px 0',
        }}>
          {technologies.map((tech, index) => (
            <a href={tech.href} key={index} >
              <Tooltip title={tech.figCaption} placement="top" arrow>
                <figure style={{ margin: '0 5px', width: '30px', height: '30px' }}>
                  {tech.svg}
                </figure>
              </Tooltip>

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

        <ButtonGroup size="small" aria-label="Small button group" sx={{ borderRadius: 50 }}>
          {buttonConfigs.map((config) => {
            if (!config.prop) return null;

            const baseStyle = {
              borderRadius: 50,
              transition: 'all 0.3s ease',
            };

            const buttonStyle = config.customStyle
              ? config.customStyle
              : {
                ...baseStyle,
                '&:hover': {
                  backgroundColor: config.hoverColor,
                  color: '#fff',
                  borderColor: config.hoverColor
                }
              };

            return (
              <Tooltip title={config.description} key={config.key} placement="top" arrow>
                <Button
                  key={config.key}
                  variant="outlined"
                  color={config.color}
                  href={config.prop}
                  startIcon={config.icon}
                  sx={buttonStyle}
                >
                  {config.label}
                </Button>
              </Tooltip>

            );
          })}
        </ButtonGroup>

      </CardActions>
    </Card>
  );
}
