import './App.css';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Header from './componets/Header';
import Body from './componets/Body';
import SearchPage from './componets/SearchPage';
import ViewPage from './componets/ViewPage';
import store from './componets/UserContext';
import { useContext, useState } from 'react';
import User from './componets/User';
import Likedimages from './componets/Likedimages';
import Collection from './componets/Collection';

const approuter = createBrowserRouter([
  {
    path:"/",
    element:<Header />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/search/:query",
        element:<SearchPage />,
      },
      {
        path:"/photos/:imageid",
        element:<ViewPage />,
      },
      {
        path:"/user",
        element:<User />,
        children:[
          {
            path:"/user/likedimages",
            element:<Likedimages />
          },
          {
            path:"/user/collection",
            element:<Collection />
          }
        ]
      }
    ]
  }
])

function App() {

  const[likedimages,setlikedimages] = useState([])
  const[ collectionimages,setcollectionimages] = useState({})
  const[searchimages,setsearchimages] = useState([])

  return (
    <div>
     <store.Provider value={{
       likedimages:likedimages,
       setlikedimages:setlikedimages,
       collectionimages: collectionimages,
       setcollectionimages:setcollectionimages,
       searchimages:searchimages,
       setsearchimages:setsearchimages,
      }}>
     <RouterProvider router={approuter} >
          <Outlet />
     </RouterProvider>
     </store.Provider>
    </div>
  );
}

export default App;
