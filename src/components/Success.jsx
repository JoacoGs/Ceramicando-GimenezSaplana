import React from "react";
import Logo from "./images/logo.jpg"

const Success = ({id}) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1>Felicitaciones!</h1>
                <p><img src={Logo} alt="Logo" width="180" /></p>
                <p>Se generó la compra con el ID: <b>{id}</b></p>
            </div>
        </div>
    )
}

export default Success;