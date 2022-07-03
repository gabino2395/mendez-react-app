import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../utils/productos";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// getDocs nos sirve para traer varios documentos de una collection(tabla)
// getDoc sirve para traer un documento en base a su id
// doc: referencia a un documento de collection
// query se utiliza para filtrar
//where espicifica donde queremos hacer el filter
import { getDocs, collection, query, where } from "firebase/firestore"
import { productsCollection } from "../Firebsae";
const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();

  useEffect(() => {
    const ref = categoryId
      ? query(productsCollection, where("categoryId", "==", categoryId))
      : productsCollection

    getDocs(ref)
      .then((resultado) => {
        const productsFromMap = resultado.docs.map((doc) => {
           return{
            id: doc.id,
            ...doc.data()
               }
         
        })
  setProducts(productsFromMap)
  setLoading(false)
})
      .catch ((error) => {
  if (error) {
    toast("API ERROR", { className: "error-toast", draggable: true })
  }
})

  }, [categoryId])





  

return (
  <>

    <ToastContainer />
    <div className="titulo">
      <h1>{props.greeting}</h1>
      {
        loading ? <p>cargando..</p> : < ItemList items={products} />
      }
    </div>
    <img className="surfboard" src="/imgLogo/pukasBanner1.png" alt="" />
  </>

);
;
}
export default ItemListContainer;
