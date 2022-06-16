import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
      <>
    <BrowserRouter>
      <NavBar />

      {/* <img className="surfboard" src="/imgLogo/pukasBanner3.jpg" alt="" /> */}
      <Main />
      <img className="surfboard" src="/imgLogo/pukasBanner1.png" alt="" />
    </BrowserRouter>
      </>
  );
};

export default App;
