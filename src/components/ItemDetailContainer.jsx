import React, { useEffect, useState } from "react";
import {productos} from './productos';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() =>{
        const getProducto = () =>
            new Promise ((res, rej)=>{
                const producto = productos.find ((prod) => prod.id === 5)
                setTimeout(() => {
                    res(producto)
                }, 2000);
            });

            getProducto()
            .then((info)=>{
                setItem(info)
            })
            .catch((error)=>{
                console.log(error)
            })
    }, [])
    return (
        <div style={{minHeight: '70vh'}}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;