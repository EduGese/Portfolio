import * as React from 'react';
import { Box, Paper, List, ListItem, Typography, Divider} from '@mui/material';
import { certificates } from '../constants/education';

export const CertificatesCard = () =>{

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
            flexGrow: 1
          }}>
            <Paper  sx={{ width: '100%', borderRadius: '50px', margin: '0 20px ', padding: '20px' }}>
              <Box
              >
                <Typography variant="h6" color='warning' sx={{ fontWeight: 'bold', borderRadius: '50px', textAlign: 'center',  padding: '10px', borderRadius: '10px' }}>
                  Courses/Certificates
                </Typography>
              </Box>
              
              <List>
                {certificates.map((certificate, index) => (
                  <React.Fragment key={certificate.id}>
                    <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="subtitle1" sx={{ color: 'primary.primary', fontWeight: 'bold' }}>
                        {certificate.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        {certificate.center}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {certificate.date}
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