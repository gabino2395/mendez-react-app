import { createContext, useState } from "react";

export const contexto = createContext();

const Provider = contexto.Provider;
//Provider : Es un componente que viene adentro de un contexto y sirve para : 1) Determina quienes tienen acceso a la informacion y 2) Determina el valor del contexto

export const MiProvider = ({ children }) => {
  const [cartList, setCarTlist] = useState([]);


 
  const addToCart = (producto,cantidad) => {
    const copia = [...cartList];
    
     const new_Product = { ...producto, cantidad };

    copia.push(new_Product);
    setCarTlist(copia);
  };

  function isInCart(id) {
    let repeat = cartList.find((repeat) => repeat.id === id);
    if (repeat === undefined) {
      return false;
    } else {
      return true;
    }
  }

  const removeProduct = (id) => {
    setCarTlist(cartList.filter((prod) => prod.id !== id));

   
  };

  const totalAmmount = () => {
     return cartList.reduce((acc,{cantidadSeleccionada}) => acc + cantidadSeleccionada,0);

   };

  const totalPrice = () => {
    return cartList.reduce(
      (count, product) => count + product.cantidadSeleccionada * product.price,
      0
    );
  };

  const cleanCart = () => {
    setCarTlist([]);
  };


  return (
    <Provider
      value={{
        cartList,
        isInCart,
        addToCart,
        cleanCart,
        removeProduct,
        totalAmmount,
        totalPrice,
      }}
    >
      {children}
    </Provider>
  );
};
export default MiProvider;
