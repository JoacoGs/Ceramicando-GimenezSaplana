import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Item = ({item}) => {
    return (
        <div className="col-md-4 py-3">
            <Card style={{ width: '18rem' }}>
            <Link to={"/producto/" + item.id} className='userLink' >
            <Card.Img variant="top" src={"../images/" + item.imagen} alt={item.nombre} />
            </Link>
            <Card.Body>
            <Card.Title className="text-center"><b>{item.nombre}</b></Card.Title>
            <Card.Text className="text-center">${item.precio}</Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Item;