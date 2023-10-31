import React from 'react'
import "../componets/Body.css"
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const User = () => {
 

  return (
    <div>
        <div>
            <img src='https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff' 
            className='user-img'
            />
        </div>
        <div className='black-line'>

        </div>
      <Link to='/user/likedimages'>
        <Button variant="outlined" color="error">
          Liked images
        </Button>
      </Link> 
          
      <Link to='/user/collection'>
          <Button variant="outlined" color="error">
           Collection images
          </Button>
      </Link>
        <Outlet />
    
    </div>
  )
}

export default User
