import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post message={post.post} likes={post.likes} />)

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
                {postsElements}
            </div>
        </div>
    </div>
}

export default MyPosts;