import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return <div className={classes.profile}>
        <div className={classes.postsBlock}>
            <h2>Posts by {props.name}</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                New post by {props.name}
            </div>
            <div className={classes.posts}>
                Posts
                <Post message='Hi! How are you?' likes='27' />
                <Post message="I'm fine!" likes='1' />
                <Post message='first, second, third post!' likes='3' />
            </div>
        </div>
    </div>
}

export default MyPosts;