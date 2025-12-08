import profilePicture from "/assets/profile-picture3.png"
import './profilePic.css'

export const ProfilePicture = () => {
    return (
        <>
            <div className="pic-frame">
                <img className="profile-pic" src={profilePicture} alt="Profile Picture" />
            </div>
        </>
    )
}
