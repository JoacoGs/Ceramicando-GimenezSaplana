import React, {useContext, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import {CartContext} from './Context';

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    const onAdd = (counter) => {
        setCounter(counter);
        addItem(item, counter);
    }

    return (
        <div className="row mb-5">
            <div className="col-md-6 offset-md-3 py-3 text-center">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"../images/" + item.imagen} alt={item.nombre}/>
                <Card.Body> 
                <Card.Title className="text-center"><b>{item.nombre}</b></Card.Title>
                <Card.Text className="text-center"> ${item.precio}</Card.Text>
                </Card.Body> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem soluta ratione quod in fugit repudiandae inventore eveniet eius.
                {counter === 0 ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to={"/cart"}>Ir al carrito</Link>
                )}
                </Card>
            </div>
        </div>
    );
};

export default ItemDetail;