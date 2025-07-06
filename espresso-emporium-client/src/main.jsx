import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './components/main/Home'
import AddCoffee from './components/main/AddCoffee'
import UpdateCoffee from './components/main/UpdateCoffee'
import CoffeeDetails from './components/main/CoffeeDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: ()=> fetch('http://localhost:3000/coffees')
      },
      {
        path: 'addCoffee',
        element: <AddCoffee/>
      },
      {
        path: 'updateCoffee',
        element: <UpdateCoffee/>
      },
      {
        path: '/coffeeDetails/:id',
        element: <CoffeeDetails />,
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
      },
    ]
  },
  {
    path: '*',
    element: <h2>Page not found</h2>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
