import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DatosProvider } from "../src/Context/DatosContext";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
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
      <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
        <GlobalStyle />
        <DatosProvider>
          <BrowserRouter basename="/">
            <Routes>
              <Route path="proyecto-facundoflix" element={<Home />} />
              <Route path="nuevo-video" element={<NuevoVideo />} />
              <Route path="nueva-categoria" element={<NuevaCategoria />} />
            </Routes>
          </BrowserRouter>
        </DatosProvider>
      </ThemeProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
