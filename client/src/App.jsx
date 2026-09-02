import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Dash from './pages/Dash'
import Faq from './pages/Faq'
import About from './pages/About'
import Nav from './components/Nav'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/About",
    element: <About />,
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  )
}

export default App
