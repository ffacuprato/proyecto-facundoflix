
import React, { useState, useContext } from "react";
import { DatosContext } from "../../Context/DatosContext";
import "../MUI/MUI.css";
import '../FormVIdeo/FormVideo.css'
import { FormControl, TextField } from "@mui/material";
import { BotonesVideoForm, Container, Title } from "../UI";
import { useDatos } from "../../Context/DatosContext";
import { Categorias } from "../UI/Categorias";

export const FormVideo = () => {
    const { datos, setDatos } = useContext(DatosContext);

    const [titulo, setTitulo] = useState('');
    const [link, setLink] = useState('');
    const [linkImg, setLinkImg] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [codigo, setCodigo] = useState('');

    const AgregarVideo = () => {
        const { datos } = useDatos();
        Categorias.push(datos);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Utiliza los valores directamente del contexto
        const newData = {
            titulo,
            link,
            linkImg,
            categoria,
            descripcion,
            codigo,
        };

        // Utiliza setDatos para establecer los datos en el contexto
        setDatos(newData);
        console.log(newData);
        AgregarVideo();
    }

    return (
        <Container>
            <Title>Nuevo video</Title>
            <form onSubmit={handleSubmit}>
                <FormControl>
            
                <TextField 
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
                    id={titulo} 
                    label='Titulo'
                    variant="filled"
                    value={titulo}
                    onChange={(e)=>{
                    setTitulo(e.target.value);
                    }}
                    />
                    <TextField 
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
                        id={link} 
                        label='Link del video'
                        variant="filled"
                        value={link}
                        onChange={(e)=>{
                        setLink(e.target.value);
                        console.log(link);
                        }}
                    />
                    <TextField 
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
                        id={linkImg} 
                        label='Link de imagen del video'
                        variant="filled"
                        value={linkImg}
                        onChange={(e)=>{
                            setLinkImg(e.target.value);
                            console.log(linkImg);
                        }}
                    />
                    <TextField 
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
                        id={categoria} 
                        label='Escoja una categoria'
                        variant="filled"
                        value={categoria}
                        onChange={(e)=>{
                            setCategoria(e.target.value);
                            console.log(categoria);
                        }}
                    />

                    <TextField 
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
                            id="filled-multiline-flexible" 
                            label='Descripcion'
                            variant="filled"
                            multiline
                            maxRows={3}
                            value={descripcion}
                            onChange={(e)=> {
                            setDescripcion(e.target.value);
                            console.log(descripcion)
                            }}
                    />

                    <TextField 
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
                        id={codigo} 
                        label='Codigo de seguridad'
                        variant="filled"
                        value={codigo}
                        onChange={(e)=>{
                            setCodigo(e.target.value);
                            console.log(codigo);
                        }}
                    />
                    <BotonesVideoForm />
                </FormControl>
            </form>
        </Container>)
    
}
