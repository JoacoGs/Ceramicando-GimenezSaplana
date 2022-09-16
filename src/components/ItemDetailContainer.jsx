import React, { useEffect, useState } from "react";
import { getProductosById } from "./customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItemDetail] = useState()

    const {id} = useParams()

    useEffect(() =>{
        getProductosById(id).then(response => {
            setItemDetail(response)
        })
    }, [id])
     /*    const getProducto = () =>
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
            }) */
   
    return (
        item &&
        <div style={{minHeight: '70vh'}}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;