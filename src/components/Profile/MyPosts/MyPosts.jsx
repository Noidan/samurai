import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post message={post.post} likes={post.likes} />)

    let newPostElement = React.createRef()

    let addPost = () => {
      
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return <div className={classes.profile}>
        <div className={classes.postsBlock}>
            <h2>Posts by {props.name}</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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