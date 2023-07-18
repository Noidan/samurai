import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        { id: 1, post: 'Hi! How are you?', likes: 182 },
        { id: 2, post: "I'm fine!", likes: 44 },
        { id: 3, post: 'first, second, third post!', likes: 41 },
        { id: 4, post: 'Banana!', likes: 182 },
        { id: 5, post: 'Blenanas!!', likes: 41 }
    ]

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
                <Post message={postData[0].post} likes={postData[0].likes} />
                <Post message={postData[1].post} likes={postData[1].likes} />
                <Post message={postData[2].post} likes={postData[2].likes} />
            </div>
        </div>
    </div>
}

export default MyPosts;