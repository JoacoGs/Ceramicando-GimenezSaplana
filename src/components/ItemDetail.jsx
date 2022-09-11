import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="col-md-4 py-3">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imagen} alt={item.nombre}/>
            <Card.Body> 
            <Card.Title className="text-center"><b>{item.nombre}</b></Card.Title>
            <Card.Text className="text-center"> ${item.precio}</Card.Text>
            </Card.Body> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem soluta ratione quod in fugit repudiandae inventore eveniet eius, cum voluptate esse sequi sapiente aut error at blanditiis sint minima!
            <ItemCount stock={5} initial={1} onAdd={0} />
            </Card>
        </div>
    );
};

export default ItemDetail;