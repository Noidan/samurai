import React from "react";
import classes from './Post.module.css'

const Post = (props) => {

    return <div className={classes.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkVsRNVJ7O7xNGK7IXtRwchi4NsKzUUdPMMcmIdbDKH_x6DKXR2EQGWrBiM8KKga7Ey0&usqp=CAU' alt='avatar' />
        {props.message}
        <div>
            <span>Like {props.likes}</span>
        </div>
    </div>

}

export default Post;