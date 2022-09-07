import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import cuencoblanco from "./images/cuenco.jpg"
import cuencogris from "./images/cuencogris.jpg"
import bowlgris from "./images/bowls.jpg"
import bowlazul from "./images/bowlazul.jpg"
import tazablanca from "./images/taza.jpg"
import mategris from "./images/mate.jpg"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    /* useEffect(() => {
        const promesa = async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos);
                }, 2000);
            });
        };
        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, []); */

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Cuenco blanco", "imagen":cuencoblanco, "precio":1500},
            {"id":2, "nombre":"Cuenco gris", "imagen":cuencogris,"precio":2000},
            {"id":3, "nombre":"Bowl gris", "imagen":bowlgris, "precio":1300},
            {"id":4, "nombre":"Bowl azul", "imagen":bowlazul, "precio":1300},
            {"id":5, "nombre":"Taza blanca", "imagen":tazablanca,"precio":700},
            {"id":6, "nombre":"Mate gris", "imagen":mategris, "precio":800}  
        ];

        const getProductos = new Promise ((resolve) => {
            setTimeout (() => {
                resolve (productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, [])

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;