import React from 'react'
import PropTypes from "prop-types"
const MyProfile = ({fullName, bio, Profession,children}) => {
    const clickOnME = e => {
        alert(fullName);
    };
    const buttonStyle ={
        width:'40%', 
        height: '2rem', 
        backgroundColor: '#0099DD', 
        border:'none', 
        borderRadius: '1rem', 
        marginBlock: '1.5rem'
    }
    const listStyle = {
        textAlign: 'start', 
        padding:'0 1rem 0 1.5rem'
    }
    return ( 
        <>
            <div className="cardProfile">
                <div>{children}</div>
                <h3 style={{marginTop: '5rem'}}>{fullName}</h3>
                <ul style={listStyle}>
                    <li style={{marginBottom:'1rem', lineHeight: '1.5rem'}}>{bio}</li>
                    <li>{Profession}</li>
                </ul>
                <button onClick={clickOnME} style={buttonStyle}> Click on me</button>
            </div>
        </>
    );
}
MyProfile.defaultProps ={
    fullName:"Monkey D Luffy",
    bio: 'I am a full time pirate and my Goal is to become Pirate King',
    Profession: 'Pirate'
}
MyProfile.prototype = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.number.isRequired,
    Profession: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default MyProfile;