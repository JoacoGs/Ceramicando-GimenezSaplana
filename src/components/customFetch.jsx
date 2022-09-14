import productos from './productos';

export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos);
        } , 500);
    })
}

export const getProductosById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}

