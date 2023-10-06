import React from "react";
import { Header } from "../../Components/Header";
import {Footer} from "../../Components/Footer/index"
import { FormCategoria } from "../../Components/FormCategoria";
import { Tabla } from "../../Components/Tabla";

export const NuevaCategoria = () => {
    return <>
        <Header />
        <FormCategoria />
        <Tabla />
        <Footer />
    </>
}