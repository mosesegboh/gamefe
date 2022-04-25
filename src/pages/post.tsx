import React, {useState,useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../components/layout';
import PostDetail from '../components/postdetail'
import {getPost} from '../services'

type Params = {
    id: string
}


export default function Post(){
    const [post,setPost] = useState({
        title:'',
        content:'',
    })
    const params:Params =useParams()
  

    useEffect( ()=>{

        async function fetchpost(){
            const {ok,data} = await getPost(params.id)
            if(ok){
                setPost(data)
            }
        }

        fetchpost()
        
    },[])
    return(
        <Layout>
          <PostDetail post={post} />
        </Layout>
    )
}