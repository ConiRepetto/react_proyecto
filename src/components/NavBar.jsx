import React from "react";


function NavBar() {
    return (
        <div>
            <div class="logo_header">
            <a href="{App}"><img src="..\Img\logo_vf.png" alt="VF LOGO" class="navbar-brand"/></a>
            
        </div>    
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="./assets/pages/socios.html">SOCIOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./assets/pages/servicios.html">SERVICIOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./assets/pages/novedades.html">NOVEDADES</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="./assets/pages/publicaciones.html" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">PUBLICACIONES</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="./assets/pages/libros.html">LIBROS</a></li>
                                
                                <li><a class="dropdown-item" href="./assets/pages/articulos.html">ARTICULOS</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./assets/pages/contacto.html">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default NavBar;
