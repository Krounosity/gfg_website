import React from "react";
import "../styles/navbar.sass";

function Navbar(){
    return(
        <div className="navbar">
            <img src="/images/logo-black.svg"></img>
            <nav>
                <a href="">Products</a>
                <a href="">Resources</a>
                <a href="">Developers</a>
                <a href="" style={{backgroundColor: "black", color: "white", borderRadius: "20px"}}>Open App</a>
            </nav>
        </div>
    );
}

export default Navbar;