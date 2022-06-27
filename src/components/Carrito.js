import React from "react";
import { useState } from "react";
import { contexto } from "../contexto/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Carrito = () => {
  const { cartList, cleanCart, removeProduct, totalPrice, totalAmmount } =
    useContext(contexto);

  // const [nombre, setNombre] = useState("");
  // const [tel, setTel] = useState("");
  // const [email, setEmail] = useState("");
  // const [usuario, setUsuario] = useState({});
  // const { carrito } = useContext(contexto);
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const usuario = { nombre, tel, email };
  //   console.log(usuario);
  // };

  // const handleClick = (e) => {
  //   e.preventDefault();
  // };

  // const handleNombreChange = (e) => {
  //   setNombre(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleTelChange = (e) => {
  //   setTel(e.target.value);
  // };
  return (
    <>
      {totalAmmount() !== 0 ? (
        <>
          <h3>Tu Carrito</h3>
          {cartList.map((product)  => (
            <>
              <div className="col-md-3" key={product.id} product={product}>
                <div className="itemsCartName">{product.name}</div>
                <p>total:</p>
                <div className="itemsCart">{product.totalAmmount}</div>
                <div className="itemsCart">{product.totalPrice} </div>
              </div>
            </>
          ))}
        </>
      ) : (
        <div>El carrito esta vacio</div>
      )}

      {/* <form onSubmit={handleSubmit}>
      <div>
      {/* <input type="text" id="Nombre" placeholder="nombre.." value={usuario.nombre}/> */}
      {/* 
      <input onChange={handleNombreChange} type="text" id="nombre" placeholder="nombre" value={usuario.nombre}/>
      </div>
      <div>
      
      <input  onChange={handleEmailChange}  type="email" id="email" placeholder="Email..." value={usuario.email}/>
      
      </div>
      <div>
      <input onChange={handleTelChange} type="number" id="telefono" placeholder="Telefono..."/>
      </div>
      <button  >comprar</button>
    </form> */}
      {/* <Link to="/checkout">Proceder con la compra</Link>
  <img className="surfboard" src="/imgLogo/pukasBanner3.jpg" alt="" /> */}
    </>
  );
};

export default Carrito;
