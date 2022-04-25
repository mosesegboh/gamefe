import React, { useState } from 'react'
import Layout from '../components/layout'
import {PostCreate} from '../services'


interface  formData {
    title:string,
    content:string
}

export default function CreatePost(){

   const [post,setPost]= useState<formData>({
       title:'',
       content:''
   })

   async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
       e.preventDefault()
        await PostCreate(post)
   }

   function handleChangeTitle(event:React.ChangeEvent<HTMLInputElement >){
        const mypost= {...post}
        mypost.title = event.currentTarget.value
        setPost(mypost)

   }

   function handleChangeBody(event:React.ChangeEvent<HTMLTextAreaElement>){
       const mypost = {...post}
       mypost.content = event.target.value
       setPost(mypost)

   }

    return (
        <Layout>
            <form style={{ width:'25rem' ,display:'flex', flexDirection:'column'}} onSubmit={(e)=>handleSubmit(e)}>
                <label  htmlFor='title'>Title</label>
                <input onChange={e=>handleChangeTitle(e)} name={'title'} id={'title'} value={post.title}/>
                <label  htmlFor='content'>Content</label>
                <textarea rows={10} cols={50} onChange={e=>handleChangeBody(e)} name={'content'} id={'content'} value={post.content}/>
                <button style={{margin:'1rem 0'}} type={'submit'}>submit</button>
            </form>
        </Layout>
    )
}