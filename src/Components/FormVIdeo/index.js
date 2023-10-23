
import React, { useState } from "react";
import "../MUI/MUI.css";
import '../FormVIdeo/FormVideo.css'
import { FormControl, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { BotonesVideoForm, Container, Title } from "../UI";
import { Categorias } from "../UI/Categorias";
import ImagenDefault from "../../../src/assets/images/slider1.png"
import { BtnNuevoElemento } from "../UI/index";

export const FormVideo = () => {

    const [titulo, setTitulo] = useState('');
    const [link, setLink] = useState('');
    const [linkImg, setLinkImg] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [codigo, setCodigo] = useState('');
    const [booleanoForm,setBooleanoForm] = useState(true);

    const handleButtonClick = (BtnLimpiar) => {
        limpiarValores();
    }

    const limpiarValores = () => {
        setTitulo('');
        setLink('');
        setLinkImg('');
        setCategoria('');
        setDescripcion('');
        setCodigo('');
    }

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
            const categoriaSeleccionada = Categorias.find(c => c.nombre === categoria);
        
            // Verifica si se encontró la categoría antes de intentar agregar el nuevo video
            if (categoriaSeleccionada) {
                // Clona el arreglo de videos existente y agrega el nuevo video al final
                categoriaSeleccionada.videos = [...categoriaSeleccionada.videos, nuevoVideo];
                console.log(Categorias);
            } else {
                console.error(`La categoría '${categoria}' no se encontró en el arreglo de categorías.`);
            }
        };
                
        PushVideo();

        // Actualizar la lista de datos utilizando la función setDatos del contexto
    
        // Reiniciar los campos del formulario
        setBooleanoForm(false)   
        setTitulo('');
        setLink('');
        setLinkImg('');
        setCategoria('');
        setDescripcion('');
        setCodigo(''); 
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        AgregarVideo();
    }


    const Formulario = <Container>
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
                                    onChange={()=>{
                                        setLinkImg(ImagenDefault)}} 
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
                                            color:'#000'
                                        }
                                    }}
                                    name={categoria} 
                                    placeholder='Escoja una categoria'
                                    label='Categoria del video'
                                    variant="filled"
                                    value={categoria}
                                    defaultValue='Seleccione un equipo'
                                    select
                                    onChange={(e)=>{
                                        setCategoria(e.target.value);
                                    }}
                                >
                                    <MenuItem key={"disabled"} value={''} selected disabled >Seleccione el equipo</MenuItem>
                                    {Categorias.map((categoria) => (
                                        <MenuItem key={categoria.nombre} value={categoria.nombre}>
                                        {categoria.nombre}
                                        </MenuItem>
                                        
                                    ))}
                                
                                </TextField>
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
                                <BotonesVideoForm onButtonClick={handleButtonClick}/>
                            </FormControl>
                        </form>
            </Container>

    const FormEnviado = <Container>
                            <Title>Elemento cargado con exito</Title>
                            <BtnNuevoElemento onClick ={() => setBooleanoForm(true)}/>
                        </Container>

    const MainContent = booleanoForm ? Formulario : FormEnviado ;

    return MainContent
        
    
}
