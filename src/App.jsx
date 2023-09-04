import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'



const App = () => {

  


  return (
    <>
     <div className='header'>
      
      
      <Navbar />
     
      
      </div> 

     <main>
       <Card/>
      
     </main>
      


    </>
  )
}

export default App
