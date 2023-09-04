import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './stylesheet/App.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'



const App = () => {


  return (
    <>
      <div className='header'><Navbar /></div>

      <main>
        <div className='card-container'>
          <Card
            title="Apfel"
            description="Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content."
            img='../public/assets/shoppingcard-apfel.jpg'

          />

          <Card
            title="Kischen"
            description="Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content"
            img='../publlic/assets/shoppingcard-kirsche.jpg'
          />


          <Card
            title="Orangen"
            description="Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content."
            img='../public/assets/shoppingcard-orange.jpg'
          />
          <Card
            title="Zitronen"
            description="Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content."
            img='../public/assets/shoppingcard-zitrone.jpg'
          />
        </div>
      </main>

    </>
  )
}

export default App
