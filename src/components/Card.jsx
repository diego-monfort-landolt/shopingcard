import React, { Component } from 'react'
import '../stylesheet/Card.css'



const Card = ( {  title, description, img }) => {
    return (
        <>
            <div className="card" styles={'width: 10rem;'}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary">Hinzufügen</button>
                </div>
            </div>

        </>
    )
}

export default Card