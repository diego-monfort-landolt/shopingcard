import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './stylesheet/App.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'



const App = () => {

  


  return (
    <>
     <div className='header'>
      
      
      <Navbar />
     
      
      </div> 

     <main>
      <div className='card-container'>
       <Card title="Apfel" />
       <Card title="Kischen" />
       <Card title="Orangen"/>
       <Card title="Zitronen"/>
      </div>
     </main>
      


    </>
  )
}

export default App
