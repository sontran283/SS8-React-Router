// import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top">
                        <img src="./src/assets/img/logos/ibm.svg" alt="..." />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars ms-1" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#services">
                                    <NavLink to={"/"} className="nav-link">Services</NavLink>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">
                                    <NavLink to={"/Portfolio"} className="nav-link">Portfolio</NavLink>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    <NavLink to={"/About"} className="nav-link">About</NavLink>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">
                                    <NavLink to={"/Team"} className="nav-link">Team</NavLink>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    <NavLink to={"/Contact"} className="nav-link">Contact</NavLink>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
