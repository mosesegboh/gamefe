import React from 'react'
import {Link} from 'react-router-dom'
import CSS from 'csstype';

const Header:CSS.Properties = {
    display:'flex', 
    justifyContent:'space-between', 
    alignItems:'center',
    boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

}


export default function Heaader(){
    return (
        <div style={Header}>
            <h1 style={{fontSize:'1rem'}}><Link style={{textDecoration:'none'}} to='/'>Muon Blog</Link></h1>
            <Link style={{textDecoration:'none'}} to='/posts/create'>+Add post</Link>
        </div>
    )
}