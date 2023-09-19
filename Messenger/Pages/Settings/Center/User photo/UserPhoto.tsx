import React from "react";
import './StyleUserPhoto.css'

const UserPhoto = ()=>{
    let img : string = "https://cdn140.picsart.com/361453903080211.png";
    return <img className="userPhoto" src={img} />
    
}

export default UserPhoto;