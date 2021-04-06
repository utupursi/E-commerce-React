import React from 'react';
import NavItem from '../NavItem/NavItem';

const nav=()=>{
    return (
        <div className="nav">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a href="#" className="navbar-brand">MENU</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto">
                        <NavItem active exact>Home</NavItem>
                        <NavItem>Products</NavItem>
                        <NavItem>My Account</NavItem>
                        <NavItem>Contact Us</NavItem>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Login</a>
                                <a href="#" className="dropdown-item">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    )
    
}

export default nav;