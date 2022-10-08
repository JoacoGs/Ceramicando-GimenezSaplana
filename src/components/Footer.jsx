import React from "react";
import "./Footer.css";
import face from "./images/face.png";
import insta from "./images/insta.png";
import logo from "./images/logo.jpg"


function Footer () {
    return (
        <div className="container-fluid footer">
            <footer className="row p-3">
             <div className="col-md-1">
             </div>    
             <div className="col-md-3">
                 <a href="">
                   <img className="logofooter" src={logo} width="60" alt="Logo" />
                 </a>
                 <p className="texto"> Sitio web creado por Joaquin Gimenez</p>  
               </div>
               <div className="col-md-1">
               </div>
               <div className="col-md-3">
                 <h2>Nuestros Datos</h2>
                   <p className="texto">Mail: msaplana@yahoo.com.ar</p>
                   <p className="texto">Whatsapp: +54 9 11 60023620</p>
               </div>
               <div className="col-md-1">
               </div>
               <div className="col-md-3">
                 <h2>Seguinos!</h2>
                   <nav className="espaciadofooter">
                       <a className="footimg" href="https://instagram.com/ceramicandomarusaplana?utm_medium=copy_link" target="_blank"> <img src={insta} width="60" alt="Instagram"/></a>
                       <a className="footimg" href="https://www.facebook.com/Ceramicando-Maru-Saplana-268416400463579/" target="_blank"><img src={face} width="60" alt="facebook" /></a>
                   </nav>
               </div>    
            </footer>
        </div>
    );
}


export default Footer; 