import React from "react";
import logo from "./images/logo.jpg";

const NavBar = () => {
    return (
        <div className="container">
           <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width=""/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" target="blank" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Vajilla
                    </a>
                    <ul className="dropdown-menu" style="background-color: #b9936c;" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Cuencos</a></li>
                        <li><a className="dropdown-item" href="#">Bowls</a></li>
                        <li><a className="dropdown-item" href="#">Tazas</a></li>              
                        <li><a className="dropdown-item" href="#">Mates</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link ">Contacto</a>
                </li>
            </ul>  
        </div>
    )
};

export default NavBar;
