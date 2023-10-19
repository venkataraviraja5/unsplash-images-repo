import React from 'react'
import store from './UserContext'
import { useContext } from 'react'
import "../componets/Viewpage.css"


const Collection = () => {

    const{collectionimages} = useContext(store)
 Object.keys(collectionimages).map((item,index) =>collectionimages[item].map(value => console.log(value)));
   // console.log(collectionimages );
   const obj = { names: ["ravi", "raja"], age: [20, 23] };

   Object.keys(obj).map((key) => {
  //   console.log(`${key}: ${obj[key].map(item => item)}`);
   });
  return ( 
    <div>
      {
            Object.keys(collectionimages).map((item,index) => (
                <div className='collection-names-page'  key={index}>
                    <div>
                    <h1 className='collection-name'>{item} Collection</h1> 
                    </div>
                    <div className='collection-images'>
                    {
                        collectionimages[item].map((value) => (
                             <img src={value} />
                        ))
                     }
                    </div>
                    </div>
            ))
        }
    </div>
  )
}

export default Collection
