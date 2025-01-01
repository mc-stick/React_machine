import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importación de Bootstrap
import Nav from "./Components/nav/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/listas/ItemDetailContainer";
import ItemListContainer from "./Components/listas/ItemListContainer";
import Nosotros from "./Components/Screens/Nosotros";
import Contacto from "./Components/Contacto";
import { CartProvider } from "./context/CartContext";
import Carrito from "./Components/Carrito";
import CheckOut from "./Components/Checkout";
import ReportWindow from "./Components/Screens/Reportes";
import Home from "./Components/Screens/Home";
import { useState } from "react";
import Login from "./Components/Screens/Login";
import Creditos from "./Components/listas/Creditos";
import Det_Reporte from "./Components/Screens/Det_Reportes";

function App() {
  const [log, setLog] = useState(false);
  const [user, setUSer] = useState('');
  

  const Menu = () => {
    return (
      <div>
        <CartProvider>
          <BrowserRouter >
            <Nav  />
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route
                path="/productos/:categoria"
                element={<ItemListContainer  user={user}/>}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/credito" element={<Creditos user={user}/>} />
              <Route path="/nosotros" element={<Nosotros user={user}/>} />
              <Route path="/maquinas" element={<ItemListContainer user={user} />} />
              <Route path="/reportes" element={<ReportWindow user={user} />} />
              <Route path="/Detalle_reporte/:id" element={<Det_Reporte user={user}  />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<CheckOut />} />
              
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    );
  };

  return (
    <div className="App">

      {/* <Creditos user={'manuel'}/> */}

      {/* <Menu/>   */}

      {log ? <Menu /> : <Login setLog={setLog} setUSer={setUSer} />}
      
    </div>
  );
}

export default App;
