import React from "react";
import UserPhoto from "./User photo/UserPhoto";
import ListOfButtons from "./ButtonsOfSettings/Buttons";
import './StyleCenter.css'

const Center = () =>{
    return <div className="styleOfCenter">
           <UserPhoto></UserPhoto>
           <button className="editButton"><p className="Edit">Edit</p></button>
           <div className = "stripe"></div>
           <p className="set">Settings</p>
           <ListOfButtons></ListOfButtons>
    </div>
}

export default Center;