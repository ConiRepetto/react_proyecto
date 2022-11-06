import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css"
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';


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


 

// function OffcanvasExample(props) {
//     return (
//         <>
//             {[ 'md'].map((expand) => (
//                 <Navbar key={expand} bg="light" expand={expand} className="mb-3">
//                     <Container fluid>
//                         <Navbar.Brand href="#"><a href='/'><img src="/imgs/logo_vf_sf.png" alt={props.title} className="navbar-brand" /></a></Navbar.Brand>
//                         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                         <Navbar.Offcanvas
//                             id={`offcanvasNavbar-expand-${expand}`}
//                             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                             placement="end"
//                         >
//                             <Offcanvas.Header closeButton>
//                                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                                     Offcanvas
//                                 </Offcanvas.Title>
//                             </Offcanvas.Header>
//                             <Offcanvas.Body>
//                                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                                     <Nav.Link href="#action1">Home</Nav.Link>
//                                     <Nav.Link href="#action2">Link</Nav.Link>
//                                     <NavDropdown
//                                         title="Dropdown"
//                                         id={`offcanvasNavbarDropdown-expand-${expand}`}
//                                     >
//                                         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                                         <NavDropdown.Item href="#action4">
//                                             Another action
//                                         </NavDropdown.Item>
//                                         <NavDropdown.Divider />
//                                         <NavDropdown.Item href="#action5">
//                                             Something else here
//                                         </NavDropdown.Item>
//                                     </NavDropdown>
//                                 </Nav>
//                                 <Form className="d-flex">
//                                     <Form.Control
//                                         type="search"
//                                         placeholder="Search"
//                                         className="me-2"
//                                         aria-label="Search"
//                                     />
//                                     <Button variant="outline-success">Search</Button>
//                                 </Form>
                                
//                             </Offcanvas.Body>
//                         </Navbar.Offcanvas>
//                     </Container>
//                 </Navbar>
//             ))}
//         </>
//     );
// }

// export default OffcanvasExample;