import React from 'react'
import { useContext } from "react";
import { contexto } from "../contexto/cartContext";
import { useState } from "react";

const Checkout = () => {
  const { carrito, cartList, cleanCart, removeProduct, totalPrice, totalAmmount } =
    useContext(contexto);
  const [nombre, setNombre] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  // const [usuario, setUsuario] = useState({
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = { nombre, tel, email };

  }
  const handleClick = (e) => {
    e.preventDefault();
  };


  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.id]: e.target.value })

  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
            {" "}
            <div>
              {/* <input
                type="text"
                id="Nombre"
                placeholder="nombre.."
              // value={usuario.nombre}
              /> */}
              <input
                onChange={handleChange}
                type="TEXT"
                id="nombre"
                placeholder="nombre..."
              value={usuario.nombre}
              />

            </div>
            <div>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                placeholder="Email..."
                value={usuario.email}
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="number"
                id="telefono"
                placeholder="Telefono..."
                value={usuario.tel}

              />
            </div>
            {/* <button>comprar</button> */}
          </form>
    </div>
  )
}

export default Checkout