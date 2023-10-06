import React from "react";
import { Categorias } from "../UI/Categorias";
import { motion } from "framer-motion";

export const Slider = () => {
    const MatrizImagenes = Categorias.map(categoria => {
        
        return categoria.Imagenes.map((image)  => {
            return <img src={image} alt="" />
         })
    })
    return MatrizImagenes
}
