// Crear un contexto
import React, { createContext, useContext, useState } from "react";

export const DatosContext = createContext();

export const DatosProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);
  
  return (
    <DatosContext.Provider value={{ datos, setDatos }}>
      {children}
    </DatosContext.Provider>
  );
};

export const useDatos = () => {
  return ([useContext(DatosContext),
          console.log(DatosContext)]
        )

};
