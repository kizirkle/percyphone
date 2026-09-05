import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

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

//components
import Nav from './components/Nav'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/dash",
    element: <Dash />,
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
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
