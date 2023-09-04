import React, {Component} from 'react'
import ShoppingCart from './shoppingcart'

const Navbar = () => {
    return (
        <>
            <div className="container-nav">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <ShoppingCart />
                    </div>
                   
                </nav>
            </div>

        </>
    )
}

export default Navbar