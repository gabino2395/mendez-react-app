
import ItemCount from "./ItemCount"
const ItemListContainer = (props) => {
    return (
        <div className='titulo'>
            <h1>{props.greeting}</h1>
             <ItemCount stock={5} initial={1} onAdd={()=>{alert(
                 'Se ha agregado un producto al carrito'
             )}} />
             
        </div>
    )
}

export default ItemListContainer