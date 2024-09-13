import { Box, Avatar, Typography } from '@mui/material';

export const LanguagesCard = () => {
    const languages = [
        {
            flag: 'https://flagcdn.com/w320/es.png', 
            language: 'Spanish',
            level: 'Native'
        },
        {
            flag: 'https://flagcdn.com/w320/gb.png', 
            language: 'English',
            level: 'Advanced'
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
                sm: 'column',
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
                        alt={`${lang.language} flag`}
                        src={lang.flag}
                        sx={{ width: '40px', height: '40px' }}
                    />
                    <Typography variant="h6">
                        {lang.language}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {lang.level}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}