import { useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {


  const [contador, setContador] = useState(initial)




  const aumentarContador = () => {

    if (contador < stock) {

      setContador(contador + 1)
    }
  }

  const bajarContador = () => {
    if (contador >= initial) {

      setContador(contador - 1)
    }

  }

  const confirmarContador = () => {
    return onAdd()
  }

  return (
    <div>
      <p>El contador va : {contador}</p>
      <button onClick={aumentarContador}>Aumentar</button>
      <button onClick={bajarContador}>Disminuir</button>
      <button onClick={confirmarContador}>Agregar al carrito </button>
    </div>
  )
}
export default ItemCount