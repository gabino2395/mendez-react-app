import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { MiProvider } from "./contexto/cartContext";
const App = () => {
  return (
    <>
   
   
      <BrowserRouter>
        <MiProvider>
          <NavBar />

          <Main />
        </MiProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
