import React from 'react'
import { Link } from 'react-router-dom';

function Nav( props ) {
    const activePage = props.activePage

    return (
        <nav className="navbar navbar-expand-lg px-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={require("../img/logo.png")} alt="Book" style={{ width: "3rem", height: "3rem" }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className={"nav-link " + (activePage === 'home' ? 'active' :'')} to="/"  >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + (activePage === 'shop' ? 'active' :'')} to="/shop"   >Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + (activePage === 'mybooks' ? 'active' :'')} to="/my-books"  >My books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + (activePage === 'history' ? 'active' :'')} to="/history"  >History</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="dropdown">
                    <Link to='/login' className='text-white text-decoration-none'>Sign in</Link>
                </div>

            </div>

            <div className="nav-shop-box">


                <Link to="/basket" className="">
                    <span className="bi bi-cart cart-badge">
                        <span className='basket-item'>3</span>
                    </span>
                </Link>

            </div>
        </nav>
    )
}

export default Nav