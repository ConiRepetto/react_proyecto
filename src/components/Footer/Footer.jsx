import React from 'react'
import "./footer.css"


function footer() {
    // const year = document.querySelectorAll('current-year')
    // year.innterHTML = new Date().getFullYear()

    return (
        <div>
            <footer className="d-flex justify-content-sm-center justify-content-md-center justify-content-xl-center justify-content-lg-center">
                <p> Copyright <span id='current-year'>©</span>  </p>
                <a href="./assets/pages/contacto.html"> Contacto </a>
                <a href="/" target="_blank">   Instagram</a>
            </footer>
        </div>
    )
}

export default footer