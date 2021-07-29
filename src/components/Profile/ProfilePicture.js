import { useEffect, useState } from "react";

const ProfilePicture = () => {
    //Fetch picture from database
    const DEFAULT_IMG = 'URL of DEFAULT HERE'
    const [picture, setPicture] = useState(DEFAULT_IMG)

    useEffect(()=>{
        const getPicture = async () => {
            //ping server

            setPicture()
        }

        getPicture();
    })
    return(
        <div>
            <img src={picture}></img>
        </div>
    );
};

export default ProfilePicture;