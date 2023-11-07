import React from "react";
import { Container, Title ,BotonesCategoriaForm } from "../UI";
import "../MUI/MUI.css";
import { FormControl, TextField } from "@mui/material";
import { MuiColorInput } from 'mui-color-input'
import { useState } from "react";
import { Categorias } from "../UI/Categorias";
import { BtnNuevoElemento } from "../UI";

export const FormCategoria = () => {

    const [booleanoForm,setBooleanoForm]=useState(true);
    const [nombre, setNombre] = useState('');
    const [subTitulo, setSubTitulo] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [img,setImg] = useState('');
    const [background, setBackground] = useState('');
    const [color, setColor] = useState('#ffffff');
    const videos = [];

    const handleChange = (color) => {
        setColor(color)
    }  

    const handleButtonClick = (BtnLimpiar) => {
        limpiarValores();
    }

    const limpiarValores = () => {

        setNombre('');
        setSubTitulo('');
        setDescripcion('');
        setImg('');
        setBackground('');
        setColor('#ffffff');
        setDescripcion('');    
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

    setBooleanoForm(false);

    limpiarValores();

    }


    const Formulario = <Container>
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
                                            required
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
                                            required
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
                                            required
                                            label='Descripcion'
                                            variant="filled"
                                            value={descripcion}
                                            onChange={(e)=>{
                                                setDescripcion(e.target.value);
                                                console.log(descripcion);
                                            }}
                                            />
                                <BotonesCategoriaForm onButtonClick={handleButtonClick}/>
                            </FormControl>
                        </form>
                    </Container>

const FormEnviado = <Container>
                        <Title>Elemento cargado con exito</Title>
                        <BtnNuevoElemento onClick ={() => setBooleanoForm(true)}/>
                    </Container>
const MainContent = booleanoForm ? Formulario : FormEnviado;

return MainContent
}