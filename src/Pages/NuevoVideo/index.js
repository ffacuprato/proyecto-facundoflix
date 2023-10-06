import React from "react";
import { Header } from "../../Components/Header";
import { FormVideo } from "../../Components/FormVIdeo";
import {Footer} from "../../Components/Footer/index"
import { Tabla } from "../../Components/Tabla";

export const NuevoVideo = () => {
    return <>
        <Header />
        <FormVideo />
        <Tabla />
        <Footer />
    </>
}