import React from "react";
import { BotonesCategoriaForm, Container, Title } from "../UI";
import { CodigoCatInput, ColorInput, NombreInput } from "../MUI";
import { Form } from "react-router-dom";

export const FormCategoria = () => {
    return <>
        <Container>
            <Title>Nueva Categoria</Title>
            <NombreInput />
            <ColorInput />
            <CodigoCatInput />
            <BotonesCategoriaForm />
        </Container>
    </>
}