import React from "react";
import styled from "styled-components";
import LogoAlura from "../../assets/images/logo.png";


const Container = styled.section`
    border: 1px solid #2A7AE4;
    box-shadow: 2px 2px 5px #2A7AE4;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem 0;
    padding: 1rem 0;
`
const LogoAluraFlix = styled.div`
    display: flex;
    width: 15.78125rem;
    height: 3.75rem;
    background-image: url(${LogoAlura});
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`
const DesarrolladoPor = styled.h1`
        color: var(----color-gray-light, #F5F5F5);
        /* @title-medium */
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        `

export const Footer = () => {
    return <>
    <Container>
        <LogoAluraFlix />
        <DesarrolladoPor>Desarrollado por Facundo Prato</DesarrolladoPor>
    </Container>
</>
}
