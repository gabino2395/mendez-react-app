import React, { useState, useEffect } from 'react';
 import { traerProducto } from '../utils/productos';
 import ItemDetail from './ItemDetail';

 const ItemDetailContainer = () => {
     const [product, setProduct] = useState({});

     useEffect(() => {
         traerProducto()
             .then((res) => {
                 setProduct(res);
             })
             .catch((error) => {
                 console.log(error);
             });
     }, []);

     return <ItemDetail product={product} />;
 };

 export default ItemDetailContainer;