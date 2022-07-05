import React from "react";
import { useState } from "react";
import { contexto } from "../contexto/cartContext";
import { useContext } from "react";
import Checkout from "./Checkout";
import { db } from "../Firebsae";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';



const Carrito = () => {




  const { cartList, cleanCart, removeProduct, totalPrice, totalAmmount, addToCart, removeProd } =
    useContext(contexto);


  const [data, setData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let order = {}
    order.buyer = data
    order.total = totalPrice()
    order.time = serverTimestamp()


    order.items = cartList.map(cartItem => {
      const name = cartItem.name
      const price = cartItem.price

      return { name, price }
    })






    const ref = collection(db, 'orders');
    addDoc(ref, order)
      .then((response) => {
        console.log(response)
        setOrderId(response.id);
        cleanCart();
      })
      .catch(error => {
        console.log(error)
      })
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  if (orderId && data !== '') {
    return <>
      <div className="container final-modal">
        <div className="row col-6">


          <h3>Gracias por tu compra, tu número de envío es: <br />{orderId}</h3>
        </div>
      </div>
    </>

  }




  return (
    <>

      {totalAmmount() !== 0 ? (
        <>
          <h3>Tu Carrito</h3>
          <div className="container">
            <div className="row cart-form">
              <div className="col-9 cart-itemsDetails">
                <ul className="cart-items">
                  <ul className="cart-item">
                    <li>item</li>
                  </ul>
                  <li>precio</li>
                  <li>cant.</li>
                  <li>subtotal</li>
                </ul>
                <hr />
                {cartList.map((product) => (
                  <ul className="cart-items3" key={product.id}>
                    <ul className="cart-item"></ul>
                    <ul className="cart-item3">
                      <button className="item-cartDelete " onClick={() => removeProd(product.id)}>
                        {console.log(removeProduct)}
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                      <li className="cart-item0">${product.price}</li>
                      <div>
                        <li>{product.cantidadSeleccionada}</li>
                      </div>
                      <li>${product.cantidadSeleccionada * product.price}</li>
                    </ul>

                    <ul className="cart-FirstSection">
                      <li>
                        <img
                          className="cart-img"
                          src={product.img}
                          alt={product.name}
                        />
                      </li>
                    </ul>
                    <li>{product.name} </li>
                  </ul>
                ))}
                <hr />
              </div>
              <div className="col-3 cart-pay">
                <p>Resumen</p>
                <hr />
                <ul className="cart-items-pay">
                  <li>sub total</li>
                  <li>{totalPrice()}</li>
                </ul>
                <ul className="cart-items-pay">
                  <li>impuesto</li>
                  <li>$0,00</li>
                </ul>
                <hr />
                <div className="final-pay">
                  <p className="pay">total de pedido $ {totalPrice()}</p>

                </div>
              </div>
            </div>
          </div>

        </>
      ) : (
        <div className="cartCard">
          <div>
            <h3>Tu Carrito</h3>
            <h4>Tu carrito esta vacio</h4>
          </div>
        </div>
      )}
      <Checkout
        handleChange={handleChange}
        data={data}
        handleSubmit={handleSubmit}
      />
      <img className="surfboard" src="/imgLogo/PukasBanner3.jpg" alt="" />

    </>
  );

};

export default Carrito;



// const objOrden = {
//   buyer: {
//     name: data.name,
//     phone: data.phone,
//     email: data.email,
//   },
//   items:{
//     total: totalPrice(),
//     // item: cartList,
//     date: serverTimestamp(),

//   }