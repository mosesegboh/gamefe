import React from 'react'
import Header from './header'
import CSS from 'csstype';

const MainContainer:CSS.Properties = {
    display:'flex',
    flexDirection:'column',
    width:'100%',


}

export default function Layout({children}:{children: React.ReactNode}){

  return (
      <div style={MainContainer}>
          <Header/>
          <div style={{display:'flex', flexDirection:'column', margin:'2rem auto'}}>
          {children}
          </div>
      </div>
  )

}