import React, { useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ItemCount = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);

    const decrementarCantidad = (valor) => {
            if (valor > 0) {
                setCounter (valor);
            }
        }

        const incrementarCantidad = (valor) => {
            if (valor <= itemStock) {
                setCounter (valor);
            }
        }

        const agregarProductos = () => {
            if (counter <= itemStock) { 
                onAdd(counter);  
                setItemStock(itemStock - counter);
                setCounter(itemStock - counter);
            }
        }

        useEffect(() => {
            setItemStock(stock);
        }, [stock]);


    return (
        <div className="container py-2">
            <div className="row">
                <div className="col-md-12">
                    <p className="text-center"></p>
                    <InputGroup>
                    <input type="button" className="btn btn-secondary" value="-" onClick={() => {decrementarCantidad (counter - 1)}} />
                        <Form.Control type="text" value={counter} onChange={()=> {}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => {incrementarCantidad (counter + 1)}} />
                    </InputGroup>
                    <div className="d-grid gap-2 pt-3">
                        <input type="button" className="btn btn-secondary" value="Agregar" onClick={() => {agregarProductos ()}} />
                    </div>
                </div>   
            </div>     
        </div>   
    )
};

export default ItemCount;