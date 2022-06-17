import React from 'react'
import { Link } from 'react-router-dom'
const Carrito = () => {
  return (
      <>
      <div>Carrito</div>
      <Link to="/checkout">Proceder con la compra</Link>
      <img className="surfboard" src="/imgLogo/pukasBanner3.jpg" alt="" />

      </>
  )
}

export default Carrito