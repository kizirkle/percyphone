import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

//pages
import Home from './pages/navigation/Home'
import Dash from './pages/admin/Dash'
import Faq from './pages/navigation/Faq'
import About from './pages/navigation/About'
import Error from './pages/navigation/Error'
import Nav from './components/Nav'
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
