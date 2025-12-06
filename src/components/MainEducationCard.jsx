import * as React from 'react';
import { mainEducation } from '../constants/education';
import { Box, Paper, Typography, Avatar } from '@mui/material';


export const MainEducationCard = ({
  language,
  backgroundColor,
  titleFontColor,
  contentTextColor }) => {
  const education = mainEducation[0];
  return (
    <Paper  elevation={24} sx={{
      width: '100%',
      maxWidth: '560px',
       borderRadius: '10px',
      margin: '20px 0',
      padding: '20px',
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      backgroundColor: backgroundColor,
      border: '1px solid var(--purple-background)'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <a href={education.link}>
          <Avatar
            alt={education.center}
            src={education.avatar}
            sx={{
              width: { xs: '80px', sm: '100px' },
              height: { xs: '80px', sm: '100px' },
              border: '1px solid grey',
              marginBottom: { xs: '10px', sm: '0' }
            }}
          />
        </a>

      </Box>


      <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, width: '100%' }}>
        <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold', color: titleFontColor }}>
          {language === 'en' ? education.titleEn : education.titleEs}
        </Typography>
        <Typography variant="body1" sx={{ color: backgroundColor }}>
          {education.center}
        </Typography>
        <Typography variant="caption" sx={{ color: titleFontColor, display: 'block' }}>
          {education.date} | {language === 'en' ? education.locationEn : education.locationEs}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '10px', color: contentTextColor, textAlign: 'justify' }}>
          {language === 'en' ? education.descriptionEn : education.descriptionEs}
        </Typography>
      </Box>
    </Paper>
  );
}
