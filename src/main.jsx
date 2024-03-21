import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Electronics from './Pages/Electronics/Electronics.jsx'
import Books from './Pages/Books/Books.jsx'
import Music from './Pages/Music/Music.jsx'
import Movies from './Pages/Movies/Movies.jsx'
import Clothing from './Pages/Clothing/Clothing.jsx'
import Games from './Pages/Games/Games.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="electronics" element={<Electronics/>} />
      <Route path="books" element={<Books/>} />
      <Route path="music" element={<Music/>} />
      <Route path="movies" element={<Movies/>} />
      <Route path="clothing" element={<Clothing/>} />
      <Route path="games" element={<Games/>} />
    </Route>  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>
)
