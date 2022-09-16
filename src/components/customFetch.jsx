import productos from './productos';

export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos);
        } , 0);
    })
}

export const getProductosById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id == id))
        }, 0)
    })
}

