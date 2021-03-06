import React from "react";
import { Link } from 'react-router-dom';

const Header= (props) => {
    return (
        <header>
            <nav className="navbar navbar-default">
                 <div className="navbar-header">
                    <img src= "images/react.png"/>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to={`/home`}>Home</Link></li>
                    <li><Link to={`/community`}>Community</Link></li>
                    <li><Link to={`/docs`}>Docs</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;