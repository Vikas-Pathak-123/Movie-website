//https://www.omdbapi.com/ (Api Reffrence)


import React from 'react'
import './App.css'
import  { Routes, Route } from "react-router-dom"
import Home from './component/Home'
import SingleMovie from './component/SingleMovie'
import Error from './component/Error'

const App = () => {
  return (<>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
   
   </>
  )
}

export default App