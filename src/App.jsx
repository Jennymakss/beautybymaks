import React, {Children} from 'react'
import { createBrowserRouter,Outlet, RouterProvider } 
from 'react-router-dom'



import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import SingleProduct from './pages/SingleProduct';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Account from './pages/Account';
import Register from './pages/Register';


export default function App() {
   
  const PageLayout = () => {
   return (
      <>
      <Header />
      <Outlet />
      <Footer />
      </>
   );        
  };
   
  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/account",
          element: <Account/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/product/:id", //This is how to handle dynamic routes (:id)
          element: <SingleProduct/>
        },
      ],
      errorElement: <ErrorPage/>
    }
  ])
    return(
      <main className="">
        <RouterProvider router={pageRoutes}></RouterProvider>
      </main>
    )
}
