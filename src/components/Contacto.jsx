import React from "react";  
import "./Contacto.css";

function Contacto () {
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 article">
                <div className="row p">
                <p><u>Whatsapp:</u> 54 1160023620 </p>
                <p><u>Gmail:</u> msaplana@gmail.com </p> 
                <p><u>Facebook:</u> CeramicandoMaruSaplana </p> 
                <p><u>Instagram:</u> CeramicandoMaruSaplana </p> 
                <p><u>Horarios de atencion:</u> Lu a Vi 09hs a 20hs Sa 10hs a 16hs </p>  
                </div>
            </div>
            <div className="col-md-3"> 
            </div>
            <div className="col-md-4">
                <h2 id="zonae" >Zona de envios:</h2>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52666.07808292354!2d-58.66856056481605!3d-34.41075228591275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca41d589d6487%3A0x9efd06924549bdb5!2sRinc%C3%B3n%20de%20Milberg%2C%20Buenos%20Aires%20Province!5e0!3m2!1sen!2sar!4v1646869498588!5m2!1sen!2sar" width="350" height="400" style="border:0;" allowfullscreen="" loading="lazy" titulo="Zona de envios"></iframe> */}
            </div>
        </div>
    </div>
    );
}

export default Contacto;