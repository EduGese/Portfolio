import { Box, Avatar, Typography } from '@mui/material';

export const LanguagesCard = ({language}) => {
    const languages = [
        {
            flag: 'https://flagcdn.com/w320/es.png', 
            languageEn: 'Spanish',
            languageEs: 'Español',
            levelEn: 'Native',
            levelEs: 'Nativo'
        },
        {
            flag: 'https://flagcdn.com/w320/gb.png', 
            languageEn: 'English',
            languageEs: 'Inglés',
            levelEn: 'Advance',
            levelEs: 'Avanzado'
        }
    ];

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '560px',
            borderRadius: '50px',
            margin: '20px 0',
            padding: '20px',
            display: 'flex',
            flexDirection: {
                xs: 'column',
                sm: 'row',
                md: 'row'
            },
            alignItems: 'start',
            gap: '20px'
        }}>
            {languages.map((lang, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: {
                            xs: 'flex-start',
                            sm: 'center',
                            md: 'center',
                            lg: 'center'

                        },
                        width: '100%',
                        gap: '10px'
                    }}
                >
                    <Avatar
                        alt={language === 'en'? `${lang.languageEn} flag` : `${lang.languageEs} flag`}
                        src={lang.flag}
                        sx={{ width: '40px', height: '40px' }}
                    />
                    <Typography variant="h6">
                        {language === 'en' ? lang.languageEn : lang.languageEs}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {language === 'en' ? lang.levelEn : lang.levelEs}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}