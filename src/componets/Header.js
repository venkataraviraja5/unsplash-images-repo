import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import "../componets/Header.css"
import { Link,useNavigate } from 'react-router-dom'
import store from './UserContext'
import { useContext } from 'react'


const Header = () => {

   const{searchimages,setsearchimages} = useContext(store)

    const [searchquery,setsearchquery] =useState('')
    const navigate = useNavigate()
    const handlekeypress = (e) => {
         if(e.key === 'Enter' && searchquery){
          navigate(`/search/${searchquery}`)
        
         } 
    }
  
  //  console.log();
   
  return (
    <div>
        <div  className='head'>

        <Link to="/"><img src='https://cdn-icons-png.flaticon.com/512/5968/5968763.png'className='logo'/></Link>
      <input type='text' placeholder='Search high-resolution Images' className='text'
      value={searchquery}
      onKeyPress={handlekeypress} onChange={(e) => setsearchquery(e.target.value)}
      />
   
      <p>Advertise</p>
      <p>Blog</p>
      <Link to="/user"><img src='https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff' className='account-circle' /></Link> 
        </div>
      <Outlet />
     
    </div>
  )
}

export default Header
