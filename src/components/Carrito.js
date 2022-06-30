import React from "react";
import { useState } from "react";
import { contexto } from "../contexto/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Carrito = () => {
 
  const { cartList, cleanCart, removeProduct, totalPrice, totalAmmount } =
    useContext(contexto);
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
                      <button className="item-cartDelete" onClick={cleanCart}>
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
                  <Link className="pay-link" to="./chekout">
                    FINALIZAR PEDIDO
                  </Link>
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
    </>
  );
};

export default Carrito;
