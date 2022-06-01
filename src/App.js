import ItemListContainer from './components/ItemListContainer'
import Header from "./components/NavBar"
const App=()=>{
    return (
        <>
     <Header />
     <br />
     <ItemListContainer greeting="Sean bienvenidos a mi tienda " />
        </>
    )
    
    
}
//mostrar la app en el dom
export default App
