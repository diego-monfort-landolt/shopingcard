import React, { Component } from 'react'
import '../stylesheet/Card.css'



const Card = ( { title }) => {
    return (
        <>
            <div className="card" styles={'width: 10rem;'}>
                <img src='../assets/shoppingcard-apfel.jpg' className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </>
    )
}

export default Card