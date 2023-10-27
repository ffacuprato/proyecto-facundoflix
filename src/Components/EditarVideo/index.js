import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { MuiColorInput } from 'mui-color-input'
import { useState } from 'react';
import { BtnGuardar, Title } from '../UI';
import { Categorias } from '../UI/Categorias';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: '2',
  color:'#FFF',
  padding: '2rem 3rem',
  backgroundColor: '#262626',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  borderRadius:'10px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const btnStyle = {
    height:'36px',
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    backgroundColor: '#2A7AE4',
    verticalAlign: 'center',
    fontFamily: 'Roboto',
    textTransform: 'none',
    fontSize: '1.3125rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.5rem',
    borderRadius: '5px',
    border: 'none',
  };  


export default function NestedModal(props) {
  const index = props.id;
  const [open, setOpen] = useState(false);
  const [nombre,setNombre]=useState(Categorias[index].nombre);
  const [subTitulo,setSubTitulo]=useState(Categorias[index].subTitulo);
  const [img,setImg]=useState(Categorias[index].img);
  const [backGround,setBackGround]=useState(Categorias[index].backGround);
  const [color,setColor]= useState(Categorias[index].color);
  const [descripcion,setDescripcion]=useState(Categorias[index].descripcion);


  const handleOpen = (e) => {
    setOpen(true);
    console.log(e.target.id)
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviar formulario');
  }

  const handleChange = (color) => {
    setColor(color);
  };


  return (
    <div>
      <Button onClick={handleOpen} sx={btnStyle} id={props.id}>Editar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
            <Title style={{
                margin:'0.75rem',
                fontSize:'2.75rem',
                textAlign:'left'
            }}>Editar categoria</Title>
            <form onSubmit={handleSubmit}>
            
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
                label='Nombre'
                variant="filled"
                value={nombre}
                onChange={()=>{
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
                label='Subtitulo'
                variant="filled"
                value={Categorias[props.id].subTitulo}
                onChange={()=>{
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
                label='Imagen'
                variant="filled"
                value={Categorias[props.id].img}
                onChange={()=>{
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
                label='Background'
                variant="filled"
                value={Categorias[props.id].backGround}
                onChange={()=>{
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
            value={Categorias[props.id].color} 
            onChange={handleChange}
            variant="filled"
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
                label='Descripcion'
                variant="filled"
                value={Categorias[props.id].descripcion}
                onChange={()=>{
                }}
            />
            <BtnGuardar style={{
                margin:'0.75rem',
            }}
            type='submit'>Guardar</BtnGuardar>
            </form>
        </Box>
      </Modal>
    </div>
  );
}
