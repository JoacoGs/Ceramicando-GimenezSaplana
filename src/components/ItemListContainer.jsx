import React, { useEffect, useState } from "react";
import  productos  from "./productos";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProductos = () =>
            new Promise ((res, rej) => {
                setTimeout(() => {
                    res(productos);
                }, 500);
            });
     
        getProductos()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });    
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;