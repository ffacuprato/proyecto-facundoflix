
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
        const nuevoVideo = {
            titulo,
            link,
            linkImg,
            categoria,
            descripcion,
            codigo,
        };
    
        const PushVideo = () => {
            // Encuentra la categoría que coincide con el valor seleccionado en 'categoria'
            const categoriaSeleccionada = Categorias.find(c => c.Titulo === categoria);
        
            // Verifica si se encontró la categoría antes de intentar agregar el nuevo video
            if (categoriaSeleccionada) {
                // Clona el arreglo de videos existente y agrega el nuevo video al final
                categoriaSeleccionada.Videos = [...categoriaSeleccionada.Videos, nuevoVideo];
                console.log(Categorias);
            } else {
                console.error(`La categoría '${categoria}' no se encontró en el arreglo de categorías.`);
            }
        };
                
        PushVideo();

        // Actualizar la lista de datos utilizando la función setDatos del contexto
    
        // Reiniciar los campos del formulario
        setTitulo('');
        setLink('');
        setLinkImg('');
        setCategoria('');
        setDescripcion('');
        setCodigo('');    }
    

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
                    name={titulo} 
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
                        name={link} 
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
                        name={linkImg} 
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
                        name={categoria} 
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
                            name="filled-multiline-flexible" 
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
                        name={codigo} 
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
