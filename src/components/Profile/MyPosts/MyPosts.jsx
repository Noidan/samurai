import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        { id: 1, post: 'Hi! How are you?', likes: 182 },
        { id: 2, post: "I'm fine!", likes: 44 },
        { id: 3, post: 'first, second, third post!', likes: 41 },
        { id: 4, post: 'Banana!', likes: 182 },
        { id: 5, post: 'Blenanas!!', likes: 41 }
    ]

    let postsElements = posts
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