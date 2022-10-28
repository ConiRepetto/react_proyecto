import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css"

function NavBar(props) {
    
    return (
        <div className="navbar-container">
            <div className="logo_header">
                <a href="{App}">
                    <img src={props.imgurl} alt={props.title} className="navbar-brand" />
                </a>
            </div>
            <div>
                <nav className="navlist-container">
                    <ul className="list-container">
                        <li>
                            <a href="/">
                                <h2>Inicio</h2>
                            </a>
                        </li>
                        <li>
                            <a href="/">Cuidado Facial</a>
                        </li>
                        <li>
                            <a href="/">Cuidado Corporal</a>
                        </li>

                        <li>
                            <CartWidget />
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    );
}

export default NavBar;
