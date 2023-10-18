import React from 'react'
import store from './UserContext'
import { useContext } from 'react'
import BodyImages from './BodyImages'

const Likedimages = () => {
    const{likedimages} = useContext(store)

  return (
    <div>
       <div>
        {
         likedimages.map((image,index) => (
            <div key={index}>
                <BodyImages image={image} />
            </div>
        ))
    }
        </div>
    </div>
  )
}

export default Likedimages
