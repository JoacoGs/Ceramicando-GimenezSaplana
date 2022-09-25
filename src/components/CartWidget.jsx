import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carrito from "./images/carrito.png"
import {CartContext} from './Context';


function CartWidget () {
    const {cartTotal} = useContext(CartContext);


    return (
        <div>
            {(cartTotal() > 0) ?
            <Link to={"/cart"}>
                <button type="button" className="btn position-relative" title="Ir al Carrito">
                    <img src={carrito} alt="Carrito" height={24} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            </Link> : ""}
        </div>
    )
}

export default CartWidget;