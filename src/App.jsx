import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './stylesheet/App.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import apfel from './images/shoppingcard-apfel.jpg'
import kirsche from './images/shoppingcard-kirsche.jpg'
import orange from './images/shoppingcard-orange.jpg'
import Zitronen from './images/shoppingcard-zitrone.jpg'







const App = () => {


  return (
    <>
      <div className='header'><Navbar /></div>

      <main>
        <div className='card-container'>
          <Card
            title="Apfel"
            description="Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content."
            img={apfel}

          />

          <Card
            title="Kischen"
            description="Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content"
            img={kirsche}
          />


          <Card
            title="Orangen"
            description="Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content."
            img={orange}
          />
          <Card
            title="Zitronen"
            description="Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content."
            img={Zitronen}
          />
        </div>
      </main>

    </>
  )
}

export default App
