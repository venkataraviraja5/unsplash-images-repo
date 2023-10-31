import React from 'react'
import "../componets/Body.css"
import { Link } from 'react-router-dom'

const BodyImages = ({image}) => {

    const imageclick = () => {
        window.scrollTo({
            top:'0px',
            behavior:'smooth'
        })

    }
    
  return (
    <div style={{marginTop:"0px"}} >
      
        <Link to={"/photos/" + image.slug}><img src={image.urls.thumb} className='image'
        onClick={imageclick}
        /></Link>
      
    </div>
  )
}

export default BodyImages
