import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Loading from "./loading";

const ItemListContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);   
   
    

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryItems = id ? query(itemsCollection, where("categoría", "==", id)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            }
        });
    }, [id]);


    return (
        <div className="container">
             {loading ? <Loading /> : <ItemList items={items} />}  
        </div>
    );
};

export default ItemListContainer;