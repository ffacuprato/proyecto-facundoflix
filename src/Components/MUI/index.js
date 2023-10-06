import React from "react";
import "../MUI/MUI.css";
import { TextField } from "@mui/material";
import { MuiColorInput } from 'mui-color-input'
import { useState } from "react";


export const ColorInput = () => {
  const [color, setColor] = useState('#ffffff')

  const handleChange = (color) => {
    setColor(color)
  }

  return (
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
  )
}

export const NombreInput = () =>{
  const [nombre,setNombre]=useState('');
  return <TextField 
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
  id={nombre} 
  label='Nombre'
  variant="filled"
  value={nombre}
  onChange={(e)=>{
    setNombre(e.target.value);
    console.log(nombre);
  }}
  />
}

export const CodigoCatInput = () =>{
  const [codigoCat,setCodigoCat]=useState('');
  return <TextField 
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
  id={codigoCat} 
  label='Codigo de seguridad'
  variant="filled"
  value={codigoCat}
  onChange={(e)=>{
    setCodigoCat(e.target.value);
    console.log(codigoCat);
  }}
  />
}

export const TituloInput = ({titulo,setTitulo}) => {

    return <TextField 
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
      }

export const LinkVideoInput = ({link,setLink}) => {
    return <TextField 
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
        />}

export const LinkIMagenInput = ({linkImg,setLinkImg}) => {
       return <TextField 
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
              />}

export const CategoriaInput = ({categoria,setCategoria}) => {
  return <TextField 
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
      />}

export const CodigoInput = ({codigo,setCodigo}) => {
  return <TextField 
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
      />}

export const DescripcionInput = ({descripcion,setDescripcion}) => {
        return <TextField 
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
}

