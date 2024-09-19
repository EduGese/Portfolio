import profilePicture from "/assets/profile-picture3.png"
import avatar from "/assets/avataaars.png"

export const ProfilePicture = () => {
    return (
        <>
            <figure className="frame">
                <img className="front" src={profilePicture} alt="Profile Picture" />
                <img className="back" src={avatar} alt="Profile Picture Back" />
            </figure>
        </>




    )
}
