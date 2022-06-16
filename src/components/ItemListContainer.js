import { traerProductos } from "../utils/productos";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { traerProductoPorCategoria } from "../utils/productos";
const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
if(category){

  traerProductos()
    .then((res) => {
      setProducts(res);
    })}else{traerProductoPorCategoria(parseInt(category))
      .then((res) => {
        setProducts(res)});
     }

      // .catch((error) => {
      //   console.log(error);
      // });
  }, [products]);
  return (
    <div className="titulo">
      <h1>{props.greeting}</h1>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
