import React from "react";
import { Container, Title ,BotonesCategoriaForm } from "../UI";
import "../MUI/MUI.css";
import { FormControl, TextField } from "@mui/material";
import { MuiColorInput } from 'mui-color-input'
import { useState } from "react";
import { Categorias } from "../UI/Categorias";
import { NuevaCategoria } from "../../Pages/NuevaCategoria";

export const FormCategoria = () => {
  
    const [nombre, setNombre] = useState(' ');
    const [subTitulo, setSubTitulo] = useState(' ');
    const [descripcion,setDescripcion] = useState(' ');
    const [img,setImg] = useState(' ');
    const [background, setBackground] = useState(' ');
    const [color, setColor] = useState('#ffffff');
    const [videos, setVideos] = useState([' ']);

    const handleChange = (color) => {
        setColor(color)
    }  

    const agregarCategoria = (e) => {

        e.preventDefault();

        const nuevaCategoria = {
            nombre,
            subTitulo,
            descripcion,
            img,
            background,
            color,
            descripcion,
            videos,
        }
        const PushCategoria = () => {
            Categorias.push(nuevaCategoria);
            console.log(Categorias);
        };
            
    PushCategoria();

    setNombre(' ');
    setSubTitulo(' ');
    setDescripcion(' ');
    setImg(' ');
    setBackground(' ');
    setColor('#ffffff');
    setDescripcion(' ');
    setVideos(' ');

    }
    return <>
        <Container>
            <Title>Nueva Categoria</Title>
            <form onSubmit={agregarCategoria}>
                <FormControl>
                    <TextField style={{
                                    margin:'0.75rem',
                                }}
                                InputProps={{
                                    style: {
                                    color: '#000',
                                    backgroundColor: '#9E9E9E',
                                    border:'none',
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color:'#000',
                                    }
                                }}
                                id={nombre} 
                                label='Nombre'
                                variant="filled"
                                value={nombre}
                                onChange={(e)=>{
                                    setNombre(e.target.value);
                                    console.log(nombre);
                                }}
                                />

                    <TextField style={{
                                    margin:'0.75rem',
                                }}
                                InputProps={{
                                    style: {
                                    color: '#000',
                                    backgroundColor: '#9E9E9E',
                                    border:'none',
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color:'#000',
                                    }
                                }}
                                id={subTitulo} 
                                label='Subtitulo'
                                variant="filled"
                                value={subTitulo}
                                onChange={(e)=>{
                                    setSubTitulo(e.target.value);
                                    console.log(subTitulo);
                                }}
                    />

                    <MuiColorInput 
                            style={{
                                margin:'0.75rem',
                            }}
                            InputProps={{
                                style: {
                                color: '#000',
                                backgroundColor: '#9E9E9E',
                                border:'none',
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color:'#000',
                                }
                            }}
                            ButtonProps={{
                            style:{
                                width:'100%',
                            }
                            }}
                            value={color} 
                            onChange={handleChange}
                            variant="filled"
                            />
                    <TextField style={{
                                    margin:'0.75rem',
                                }}
                                InputProps={{
                                    style: {
                                    color: '#000',
                                    backgroundColor: '#9E9E9E',
                                    border:'none',
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color:'#000',
                                    }
                                }}
                                id={descripcion} 
                                label='Descripcion'
                                variant="filled"
                                value={descripcion}
                                onChange={(e)=>{
                                    setDescripcion(e.target.value);
                                    console.log(descripcion);
                                }}
                                />
                    <BotonesCategoriaForm />
                </FormControl>
            </form>
        </Container>
    </>
}