import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const bajarContador = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  const confirmarContador = () => {
    return onAdd();
  };

  return (
    <div className="item-count">
      <div className="item-cartCard">
        <div className="item-cartCount">
          <button className="btn " onClick={bajarContador}>
            <span class="material-symbols-outlined">remove</span>
          </button>
          <p className="item-CartNumber"> {contador}</p>
          <button className="btn" onClick={aumentarContador}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        
        <button className="item-cartConfirm" onClick={confirmarContador}>
          Agregar al carrito{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
