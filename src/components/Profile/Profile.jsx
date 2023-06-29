import React from "react";
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return <div className={classes.profile}>
                <div>
            <img src='https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='city' />
        </div>
        <div>
                        Description
        </div>
   
        <MyPosts name='Tony'/>
    </div>

}

export default Profile;