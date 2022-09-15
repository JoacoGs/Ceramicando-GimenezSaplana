import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { customFetch } from "./customFetch";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const [productos, setproductos] = useState([])

    const {categoria} = useParams()

    useEffect(() => {

        if(!categoria){
  
          customFetch().then(response => {
            setproductos(response)})
        }else {
          customFetch().then(r => {
            setproductos(r.filter(st => st.categoria === categoria))
          })
        }
    },[categoria])

    useEffect(() => {
        const getProductos = () =>
            new Promise ((res, rej) => {
                setTimeout(() => {
                    res(productos);
                }, 0);
            });
     
        getProductos()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            }); 
               
    }, [productos]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;