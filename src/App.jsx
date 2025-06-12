import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Navbar from './component/Navbar'
import './App.css'
import UserDetails from './pages/UserDetails'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/user",
      element: <><Navbar /><User /></>
    },
    
     {
      path: "/user/:userid",
      element: <><Navbar /><UserDetails /></>
    }
  ])

  return (
    <>
    <div className="container">
       <RouterProvider router={router} />

    </div>
      
     
    </>
  )
}

export default App
