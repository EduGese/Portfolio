import * as React from 'react';
import { Box, Paper, List, ListItem, Typography, Divider} from '@mui/material';
import { certificates } from '../constants/education';

export const CertificatesCard = ({language}) =>{

    return(
        <Box sx={{
            padding: '10px', display: 'flex', flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row'
            }
          }}>

            <Box sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '40%',
                xl: '40%'
              },
              paddingRight: '10px',
              paddingBottom: '10px'

            }}>
              <Typography variant="h6">
                {visibleText.experienceRol2}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <Avatar  src='/assets/timeStamp.jfif' sx={{ marginRight: '5px',width:50, height:50, border: '1px solid Gainsboro' }} />
                <Typography variant="body1">{visibleText.experienceCompanyName2}<Typography variant="body2" sx={{ color: 'text.secondary'}}>{visibleText.experienceCompany2Location} ({visibleText.experienceModality2})</Typography> </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontStyle: 'italic'}}>{visibleText.experienceDate2}</Typography>
            </Box>
            <Box sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '60%',
                xl: '60%'
              },
              paddingRight: '10px',
              paddingBottom: '10px',
              textAlign: 'justify'

            }}>
              <Typography variant="body2" sx={{ marginTop: '10px', color: 'text.secondary', fontSize: { xl: '1rem' } }}>
                {visibleText.experienceAchivements2}
              </Typography>
            </Box>
          </Box>
    )
}