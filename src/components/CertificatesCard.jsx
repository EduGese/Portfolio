import * as React from 'react';
import { Box, Paper, List, ListItem, Typography, Divider} from '@mui/material';
import { certificates } from '../constants/education';

export const CertificatesCard = ({language, backgroundColor, titleFontColor, contentTextColor}) =>{

    return(
        <Box sx={{
            width: {
              xs: '70%',
              sm: '70%',
              md: '30%'
            },
            height: {
              xs: 'auto',
              sm: 'auto',
              md: 'auto'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}>
            <Paper  elevation={24}  sx={{ width: '100%',  borderRadius: '10px', margin: '20px ', padding: '20px', border: '1px solid var(--purple-background)',  backgroundColor: backgroundColor }}>
              <Box
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', borderRadius: '50px', textAlign: 'center',  padding: '10px',color: titleFontColor }}>
                   {language === 'en' ? 'Courses/Certificates' : 'Cursos/Certificados'} 
                </Typography>
              </Box>
              <List>
                {certificates.map((certificate, index) => (
                  <React.Fragment key={certificate.id}>
                    <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="subtitle1" sx={{ color:titleFontColor, fontWeight: 'bold' }}>
                        {language === 'en' ? certificate.titleEn : certificate.titleEs}
                      </Typography>
                      <Typography variant="body2" sx={{ color: contentTextColor }}>
                        {certificate.center}
                      </Typography>
                      <Typography variant="caption" sx={{ color: contentTextColor }}>
                        {certificate.date}
                        {language === 'en' ? certificate.dateEn : certificate.dateEs}
                      </Typography>
                    </ListItem>
                    {certificate.id !== 3 && (
                      <Divider variant="middle" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Box>
    )
}