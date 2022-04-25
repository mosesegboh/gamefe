
import {PostModel, CommentModel} from '../models'

const BaseUrl = 'http://localhost:5000'

type Response = {
    ok: boolean
    data?: any
    status: number
    error?: string
}


function wrapper(response:
    globalThis.Response): Response {

    return { ok:response.ok, data:response.json, status:response.status}
 
}



export async function getPost(id:string):Promise<Response>  {
    return wrapper(await fetch(`${BaseUrl}/posts/${id}`)) 
}

export async function getPosts(){
    wrapper(await fetch(`${BaseUrl}/posts`)) 
    
}

export async function PostCreate(data:PostModel){
    wrapper (await fetch(`${BaseUrl}/posts`,{
        method:'POST',
        body: JSON.stringify(data)
    }))
}


export async function AddComment(data:CommentModel){

    wrapper(await fetch(`${BaseUrl}/comments`,{
        method:'POST',
        body:JSON.stringify(data)
    }))

}

export async function deleteComment(id:number){

    wrapper(await fetch(`${BaseUrl}/comments/${id}`,{
        method:'Delete',
    
    }))

}