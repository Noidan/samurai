import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return <div>
        <div >
            <img className={classes.widescreen} src='https://p4.wallpaperbetter.com/wallpaper/207/882/430/cyberpunk-cyberpunk-2077-video-games-screen-shot-wide-screen-hd-wallpaper-preview.jpg' alt='city' />
        </div>
        <div className={classes.descriptionBlock}>
            Description / Ava
        </div>
    </div>

}

export default ProfileInfo;