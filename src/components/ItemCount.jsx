import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const decrementarCantidad = (valor) => {
            if (valor > 0) {
                setCantidad (valor);
            }
        }

        const incrementarCantidad = (valor) => {
            if (valor <= itemStock) {
                setCantidad (valor);
            }
        }

        const agregarProductos = () => {
            if (cantidad <= itemStock) {   
                setItemStock(itemStock - cantidad);
                setItemAdd(itemAdd + cantidad);
            }
        }

    return (
        <div className="container py-2">
            <div className="row">
                <div className="col-md-12">
                    <p className="text-center"></p>
                    <InputGroup>
                    <input type="button" className="btn btn-secondary" value="-" onClick={() => {decrementarCantidad (cantidad - 1)}} />
                        <Form.Control type="text" value={cantidad} onChange={()=> {}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => {incrementarCantidad (cantidad + 1)}} />
                    </InputGroup>
                    <div className="d-grid gap-2 pt-3">
                        <input type="button" className="btn btn-secondary" value="Agregar" onClick={() => {agregarProductos ()}} />
                    </div>
                    <p>Cantidad: {itemAdd}</p>
                </div>   
            </div>     
        </div>   
    )
};

export default ItemCount;