import React, { useState } from 'react'
import { useEffect } from 'react';
import '../componets/Body.css'
import BodyImages from './BodyImages';
import UserContext from './UserContext';
import { useContext } from 'react';

const Body = () => {

    const[images,setimages] = useState([])
    const[page,setpage] = useState(0)
    
     const {user,setuser} = useContext(UserContext)

    const photoApi = async () => {
       try{
        const url = await fetch (`https://api.unsplash.com/photos?page=${page}&client_id=HuGttIVCQ3IEKtFKsSLSyTeGHX8wsUQaYc0YdS6OyFY`);
        const jsonfile = await url.json()
        //console.log(jsonfile[0].urls);
        setimages([...images,...jsonfile])
       }
       catch(err){}
      }


      useEffect(()=>{
        photoApi()
      },[])
   
      const [isLoading, setIsLoading] = useState(false);

      const handlescroll = () => {

        if( window.innerHeight + window.scrollY >= document.body.scrollHeight - 200 &&
            !isLoading)
            {
                photoApi()
                setpage(page+1)
            }
      }

      useEffect(() => {
        window.addEventListener("scroll",handlescroll)
       // console.log(page);

        return ()=> {
            window.removeEventListener("scroll",handlescroll)
        }
      })
         
  return (
    <div className='body'>
        <div  className='images'>
    {
        images.map((image,index) => (
            <div key={index}>
                <BodyImages image={image} />
            </div>
        ))
    }
    </div>
    </div>
  )
}

export default Body
