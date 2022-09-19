import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./images/carrito.png"
import trash from "./images/trash.png"
import {CartContext} from './Context';


function CartWidget () {
    const {cartTotal, clear} = useContext(CartContext);


    return (
        <div>
            <Link to={"/cart"}>
                <button type="button" className="btn position-relative"     title="Ir al Carrito">
                    <img src={Cart} width="30" alt="Carrito" />
                    <span className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-danger">{cartTotal()} </span>
                </button>
            </Link>   
            <button type="button" className="btn position-relative me-1" title="Vaciar Carrito" onClick={()=> {clear()}}>
                <img src={trash} width="35" alt="Cesto" />
            </button>
        </div>
    )
}

export default CartWidget;