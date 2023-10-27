import React, { useState , useEffect } from "react";
import { Categorias } from "../UI/Categorias";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "styled-components";
import NestedModal from "../EditarVideo";

const BasicTable = () => {

    const [categorias,setCategorias] = useState(Categorias);

    const HandleEditarClick = (e) => {
      const index = e.target.id;
      console.log(index)
    }
    
    const HandleRemoveClick = (e) => {
      const index = e.target.id;
      const updatedCategorias = [...categorias];
      Categorias.splice(index,1);
      updatedCategorias.splice(index,1);
      setCategorias(updatedCategorias);    
    }

    useEffect(() => {
      // Puedes realizar acciones adicionales aquí si es necesario
      // Este efecto se ejecuta cada vez que 'categorias' cambia.
    }, [categorias]);
    
    const tableStyles = {
        display:'flex',
        justifyContent:'center',
        backgroundColor: '#000000E5',
        borderRadius: '0', 
      };
      const cellStyles = {
        color: '#FFF',
      };

      const BtnEditar = styled.button`
      flex-shrink: 0;
     display: flex;
     justify-content: center;
     align-items: center;
     color: #FFF;
     background-color: #2A7AE4;
     vertical-align: center;
     font-family: 'Roboto';
     font-size: 1.3125rem;
     font-style: normal;
     font-weight: 400;
     line-height: 1.5rem; /* 114.286% */
     border-radius: 5px;
     border: none;
     `
  
     const BtnRemove = styled.button`
     height: 36px;
     flex-shrink: 0;
     display: flex;
     justify-content: center;
     align-items: center;
     color: #000;
     background-color: #9E9E9E;
     vertical-align: center;
     font-family: 'Roboto';
     font-size: 1.3125rem;
     font-style: normal;
     font-weight: 400;
     line-height: 1.5rem; /* 114.286% */
     border-radius: 5px;
     border: none;
     `
 
    if (categorias.length > 0) {
      return (
      <TableContainer component={Paper} sx={tableStyles} >
        <Table sx={{width:'92.5%',
        }} aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={cellStyles}>Titulo</TableCell>
              <TableCell align="left" sx={cellStyles}>Descripcion</TableCell>
              <TableCell align="right" sx={cellStyles}></TableCell>
              <TableCell align="right" sx={cellStyles}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorias.map((row,index) => (
              <TableRow
                key={row.nombre}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={cellStyles}>{row.nombre}</TableCell>
                <TableCell align="left" sx={cellStyles}>{row.descripcion}</TableCell>
                <TableCell align="right" sx={cellStyles}><NestedModal id={index}/></TableCell>
                <TableCell align="right" sx={cellStyles}><BtnRemove onClick={HandleRemoveClick} id={index}>Remover</BtnRemove></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
    }else{
    <></>
    }
}


export const Tabla = () => {
    return <BasicTable />
} 