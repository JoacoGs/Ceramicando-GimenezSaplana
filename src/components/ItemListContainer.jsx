import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Loading from "./loading";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
   /*  const [productos, setproductos] = useState([]) */
    

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryItems = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            }
        });
    }, [id]);


/*     useEffect(() => {

        if(!categoria){
  
          customFetch().then(response => {
            setproductos(response)})
        }else {
          customFetch().then(r => {
            setproductos(r.filter(st => st.categoria === categoria))
          })
        }
    },[categoria])
 */
   /*  useEffect(() => {
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
               
    }, [productos]); */

    return (
        <div className="container">
             {loading ? <Loading /> : <ItemList items={items} />}  
        </div>
    );
};

export default ItemListContainer;