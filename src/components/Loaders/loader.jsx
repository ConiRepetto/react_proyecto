import React from "react";
import "./loader.css"
import { Metronome } from '@uiball/loaders'


function Loader() {
    return(
    <div className="loader">
        <Metronome
            padding={"10em"}
            size={80}
            speed={1.6}
            color="#27862f"
        />
    </div>
    )
}

export default Loader;