import React from 'react';
import {PostModel} from '../models'



export default function Post({post}: { post: PostModel }){
    return(
        <div>
            <h2>{post.title}</h2>
            <span>{post.date}</span>
            <p>{post.content}</p>
        </div>
    )
}