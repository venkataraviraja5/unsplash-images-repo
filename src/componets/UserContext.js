import React from 'react'
import { createContext } from 'react'

const store = createContext({
    likedimagesstore:{
        likedimages:[]
    },
    collectionstore:{
        collectionimages:{

        }
    },
    searchpage:{
        searchimages:[]
    }
})

export default store