import profilePicture from "/assets/profile-picture3.png"
import './profilePic.css'
import { Box } from '@mui/material';

export const ProfilePicture = () => {
    return (
        <>
            <Box
                className="pic-frame"
                sx={{
                    width: '100%',
                    maxWidth: {
                        xs: '200px',
                        sm: '240px',
                        md: '350px',
                        lg: '400px',
                        xl: '450px'
                    },
                    height: {
                        xs: '300px',
                        sm: '340px',
                        md: '450px',
                        lg: '500px',
                        xl: '550px'
                    },
                    '@media (max-width: 375px)': {
                        paddingTop: '10px',
                        maxWidth: '180px',
                        height: '220px'
                    },
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                <img
                    className="profile-pic"
                    src={profilePicture}
                    alt="Profile Picture"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </Box>
        </>
    )
}