import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DatosProvider } from "../src/Context/DatosContext";
import GlobalStyle from "./GlobalStyle";
import { Home } from "./Pages/Home";
import { NuevoVideo } from "./Pages/NuevoVideo";
import { NuevaCategoria } from "./Pages/NuevaCategoria";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <>
        <GlobalStyle />
        <DatosProvider>
        <div className="window-container">
          <div className="container custom-container">
            <BrowserRouter basename="/">
              <Routes>
                <Route path="proyecto-facundoflix" element={<Home />} />
                <Route path="nuevo-video" element={<NuevoVideo />} />
                <Route path="nueva-categoria" element={<NuevaCategoria />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
        </DatosProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
