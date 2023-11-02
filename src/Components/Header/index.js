import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { HomeButtonAlura } from "../UI/index";
import { useNavigate } from "react-router-dom";


export const Header = () => {
    const Nav = styled.section`
        display: flex;
        background-color: black;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        height: 5.875rem;
    `    

const navigate = useNavigate()

const handleClick = () => {
   navigate("/nuevo-video");
}

    return <Nav>
                <HomeButtonAlura />
                <div><Button variant="outlined" onClick={handleClick}>Nuevo Video</Button>
                </div>
            </Nav>
       
}