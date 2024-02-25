import {createBrowserRouter} from 'react-router-dom'
import Register from '../pages/register';
import Login from '../pages/login';
import Home from '../pages/home';
import NotFoundPage from '../pages/notFoundPage';
import FirstPage from '../pages/firstpage';



const router = createBrowserRouter([
    {
      path : '/',
      element : <div> <FirstPage/> </div>,
      errorElement : <NotFoundPage/>,
    },
    {
      path : '/login',
      element : <Login/>
    },
    {
      path : '/register',
      element : <Register/>
    },
    {
      path : '/home',
      element : <Home/>
    }
  ])

  export default router;