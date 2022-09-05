import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Cuenco blanco", "imagen":"./images/cuenco.jpg", "precio":1500},
            {"id":2, "nombre":"Cuenco gris", "imagen":"./components/images/cuencogris.jpg","precio":2000},
            {"id":3, "nombre":"Bowl gris", "imagen":"./components/images/bowls.jpg", "precio":1300},
            {"id":4, "nombre":"Bowl azul", "imagen":"./components/images/bowlazul.jpg","precio":1300},
            {"id":5, "nombre":"Taza blanca", "imagen":"./components/images/taza.jpg","precio":700},
            {"id":6, "nombre":"Mate gris", "imagen":"./components/images/mate.jpg","precio":800}  
        ];

        const promesa = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (productos);
            }, 2000);
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, [])

    return (
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;