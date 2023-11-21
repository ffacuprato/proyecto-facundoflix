import React from "react";
import { Header } from "../../Components/Header";
import { Main } from "../../Components/Main";
import { Footer } from "../../Components/Footer";
import styled from "styled-components";

export const Home = () => {
    const Body = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 730px;
    background-color: #000;
    `
    return <>
            
            <Body>
                <Header />
                <Main />
                <Footer />
            </Body>
    </>
}