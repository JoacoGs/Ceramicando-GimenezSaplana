import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import {CartContext} from './Context';

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (counter) => {
        addItem(item, counter);
    }

    const { nombre, imagen,precio, stock} = item

    return (
        <div className="col-md-4 py-3">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} alt={nombre}/>
            <Card.Body> 
            <Card.Title className="text-center"><b>{nombre}</b></Card.Title>
            <Card.Text className="text-center"> ${precio}</Card.Text>
            </Card.Body> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem soluta ratione quod in fugit repudiandae inventore eveniet eius, cum voluptate esse sequi sapiente aut error at blanditiis sint minima!
            <ItemCount stock={stock} initial={1} onAdd={onAdd}  />
            </Card>
        </div>
    );
};

export default ItemDetail;