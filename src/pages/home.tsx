import React, {useState,useEffect} from 'react'
import Post from '../components/post'
import Layout from '../components/layout'
import {PostModel} from '../models'


const Mypost:PostModel[] = [
    {
        id:1,
        title:'first post',
     date: '1/ 1/2020',
     content:'this is the first post'
}
]


export default function Home(){

    const [posts, setPosts]=useState([])

    useEffect(()=>{

    },[])

    return(

        <Layout>
    
        
        {Mypost.map(post=><Post post={post}/>)}
        </Layout>

    )
}