import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post}
                                                   likesCount={p.likesCount}/>)

    let newPostsElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text= newPostsElement.current.value;
        props.updateNewPostText(text);

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostsElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message={posts[0].post} likesCount={posts[0].likesCount}/>
                <Post message={posts[1].post} likesCount={posts[1].likesCount}/>
                <Post message="It's my first post" likesCount='23'/>*/}
            </div>
        </div>
    )
}

export default MyPosts;