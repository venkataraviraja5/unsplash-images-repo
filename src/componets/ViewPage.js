import React, { useEffect, useState } from 'react'
import "../componets/Viewpage.css"
import { useParams } from 'react-router-dom'
import Body from './Body'
import store from './UserContext'
import { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ViewPage = () => {

    const {imageid} = useParams()
    const[viewpage,setviewpage] = useState({})

    const {likedimages,setlikedimages, collectionimages,setcollectionimages} = useContext(store)

   const viewpageApi = async() => {
   try{
    const url = await fetch(`https://api.unsplash.com/photos/${imageid}?client_id=HuGttIVCQ3IEKtFKsSLSyTeGHX8wsUQaYc0YdS6OyFY`)
    const jsonfile = await url.json()
    //console.log(jsonfile.id);
    setviewpage(jsonfile)
   }
   catch(error){
    
   }
   }
 
   //console.log(likedimages);


   let likedimage = false

   likedimages.map((value) => {
    if(value.id === viewpage.id){
      likedimage = true
    }
    else{
        likedimage = false
    }
})
   

   const addlikedimages = (item) => {
    
    likedimages.map((value) => {
        if(value.id === item.id){
          likedimage = true
        }
        else{
            likedimage = false
        }
    })
     if(likedimage === false){
        const newlikedimages = likedimages.slice()
        newlikedimages.push(item)
        setlikedimages(newlikedimages)
        likedimage = true
     }
     else{
        const filteritems = likedimages.slice()
        const newarray = filteritems.filter((item) => item.id )
        setlikedimages(newarray)
     }
   }

  useEffect(()=> {
    viewpageApi()
  //  console.log(collectionimages);
  },[imageid])
 
const obj1 = {
    fontSize: '30px',
    color: 'white',
    backgroundColor: 'black',
    padding: '10px', 
    borderRadius: '100%', 
    display: 'inline-block', 
    cursor:"pointer"
}

const obj2 = {
    fontSize: '30px',
    color: 'red',
    backgroundColor: 'black',
    padding: '10px', 
    borderRadius: '100%', 
    display: 'inline-block', 
    cursor:"pointer"
}

const[collectionimagesstate,setcollectionimagesstate] = useState(false)


const collectionimagesfunction = () =>{
    setcollectionimagesstate(!collectionimagesstate)
}

const [collectionName, setCollectionName] = useState('');

const addkeys = () =>{
     if(collectionName.length > 0){
        setcollectionimages({
            ...collectionimages,[collectionName]:[]
          })
     }
}


const addDataToKeys = (item,index) => {
    const newarr = collectionimages[item].push(viewpage?.urls?.small)
  // console.log(newarr);
  setcollectionimagesstate(false)
}

useEffect(()=>{
    setcollectionimagesstate(false)
},[])


  return (
    <div>
       <div className='collectioncenter'>
       {
        collectionimagesstate &&  <div className='collection'>
        <input type='text'  placeholder='Add New Collection'
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
          
        />
        <button onClick={addkeys}>Add</button> <button onClick={()=> setcollectionimagesstate(false)}>Back</button>
        {
            Object.keys(collectionimages).map((item,index) => (
                <div className='collection-names'>
                    <h3 key={index}>{item}</h3> <button onClick={()=>addDataToKeys(item,index)} className='btn'>Add Here</button>
                    </div>
            ))
        }
       </div>
       }
       </div>
       <div className='viewpage'>
          <img src={viewpage?.urls?.small} className='viewphoto'/>
       </div>
    
       <div className='heart'>
        
         <div className='heartstyle'>
        {
            likedimage ?  <p style={obj2}
            onClick={()=>addlikedimages(viewpage)}
          >&hearts;</p> :  <p style={obj1}
          onClick={()=>addlikedimages(viewpage)}
        >&hearts;</p>
        } 
   
      <Button variant="contained" color="success" onClick={collectionimagesfunction} className='collectionbtn'>
        Add To Collection
      </Button>

         </div>

       </div>
      <div>
      <div className='left'>
        <p>Views:{viewpage?.views}</p>
        <p>Downloads:{viewpage?.downloads}</p>
       </div>
       <div className='right'> 

       </div>
      </div>

      <div className='description'>
        <p>{viewpage?.alt_description}</p>
      </div>

      <div>
        <h1 className='relatedimages' >RELATED PHOTOS</h1>
        <Body />
      </div>
    </div>
  )
}

export default ViewPage
