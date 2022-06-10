import { traerProductos } from "../utils/productos";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    traerProductos()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="titulo">
      <h1>{props.greeting}</h1>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
