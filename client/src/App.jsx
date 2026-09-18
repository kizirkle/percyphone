import { useState } from 'react'
import { createBrowserRouter, redirect, RouterProvider} from 'react-router-dom'

//pages
import Home from './pages/navigation/Home'
import Dash from './pages/admin/Dash'
import Faq from './pages/navigation/Faq'
import About from './pages/navigation/About'
import Error from './pages/navigation/Error'
import Clowns from './pages/navigation/Clowns'
import Events from './pages/navigation/Events'
import Login from './pages/admin/Login'
import Shop from './pages/navigation/Shop'
import ProductPage from './pages/navigation/ProductPage'

//components
import Nav from './components/Nav'
import Footer from './components/Footer'

//Check if admin is logged in before allowing them to access dash
const checkAuth = () => {
  const token = localStorage.getItem("adminId");

  if(!token){
    throw redirect('/');
  };

  return {isAuthenticated: true};
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/admin/dashboard",
    element: <Dash />,
    loader: checkAuth,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/clowns",
    element: <Clowns />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/product/:id",
    element: <ProductPage/>
  }
])
function App() {
  return (
    <>
      <Nav />
      <RouterProvider router={router} className="d-flex flex-column"/>
      <Footer />
    </>
  )
}

export default App
