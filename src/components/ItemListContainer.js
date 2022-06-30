import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../utils/productos";
// import{db} from"..Firebsae/"
const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);
  const[loading,setLoading]= useState(true)
  const { categoryId } = useParams();

  useEffect(() => {

    setLoading(true)
    new Promise((res, rej) => {
      setTimeout(() => {
        
        res(categoryId ? productos.filter((producto)=>{

          return producto.categoryId == categoryId

        }) : productos)
      }, 2000)
    })
      .then(resultado => {
        setProducts(resultado)
         setLoading(false)
      })
      .catch(() => {
        setProducts([])
      })

  }, [categoryId])
  return (
    <>
    
    <div className="titulo">
      <h1>{props.greeting}</h1>
      {
        loading ? <p>cargando..</p> :< ItemList items={products}/>
             }
    </div>
          <img className="surfboard" src="/imgLogo/pukasBanner1.png" alt="" />
    </>

  );
;
    }
export default ItemListContainer;
