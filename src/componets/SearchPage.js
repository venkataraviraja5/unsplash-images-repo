import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BodyImages from './BodyImages'
import "../componets/Body.css"
import store from './UserContext'
import { useContext } from 'react'

const SearchPage = () => {
    const {query} = useParams()
    //console.log(query);
    const[searchstring,setstring] = useState('')

    const{searchimages,setsearchimages} = useContext(store)
    
   // const[searchimages,setsearchimages] = useState([])
    const[page,setpage]=useState(0) 


    const searchApi = async() => {
       try{
        const url = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=HuGttIVCQ3IEKtFKsSLSyTeGHX8wsUQaYc0YdS6OyFY`)
        const jsonfile = await url.json()
        //console.log(jsonfile);
        setsearchimages([...searchimages,...jsonfile?.results])
        setstring(query)
       }
       catch(error){

       }
    }

    useEffect(()=> {
        setsearchimages([])
        searchApi()
        //console.log(searchimages);
    },[searchstring])



    
    const [isLoading, setIsLoading] = useState(false);

    const handlescroll = () => {

      if( window.innerHeight + window.scrollY >= document.body.scrollHeight - 200 &&
          !isLoading)
          {
             searchApi()
             setpage(page + 1)
          }
    }

    useEffect(() => {
      window.addEventListener("scroll",handlescroll)

      return ()=> {
          window.removeEventListener("scroll",handlescroll)
      }
    })


  return (
    <div>
        <div  className='images'>
      {
        searchimages.map((image,index) => (
            <div key={index}>
            <BodyImages image={image} />
        </div>
        ))
      }
    </div>
    </div>
  )
}

export default SearchPage
