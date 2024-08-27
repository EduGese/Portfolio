import profilePicture from "../assets/profile-picture.png"
import '../css/ProfilePic.css'
export const ProfilePicture = () => {
    return (
        <div className="frame">
            <img className="front" src={profilePicture} alt="Profile Picture" />
            <img className="back" src={profilePicture} alt="Profile Picture Back" />
        </div>
    )
}