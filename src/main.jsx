import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , createRoutesFromElements , Route, RouterProvider } from "react-router-dom"
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import CartModel from './pages/CartModel.jsx'
const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>} >
      <Route path='' element = {<Home/>} />
      <Route path='item-search' element={<Search/>}/>
      <Route path='e-dairy-cart' element = {<CartModel/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
