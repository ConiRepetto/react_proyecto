import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";


function NavBar(props) {

    return (
        <div className="navbar-container">
            <div className="logo_header">
                <Link to="/">
                    <img src={props.imgurl} alt={props.title} className="navbar-brand" />
                </Link>
            </div>
            <div>
                <nav className="navlist-container">                  
                    <ul className="list-container">
                        <li>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                            </Form>
                        </li>
                        <li>
                            <Link to="/"><h2>Inicio</h2></Link>
                        </li>                       
                        <li>
                            <Link to="/category/facial">Cuidado Facial</Link>
                        </li>
                        <li>
                            <Link to="/category/corporal">Cuidado Corporal</Link>
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