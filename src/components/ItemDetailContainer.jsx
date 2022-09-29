import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const db = getFirestore();
        const response = doc(db, "items", id);
        getDoc(response).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            }            
        });
    }, [id]);
   
    return (
        <div className="container">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;