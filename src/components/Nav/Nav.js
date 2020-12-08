import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#0">Social Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#0">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0">Contact</a>
                        </li>                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;