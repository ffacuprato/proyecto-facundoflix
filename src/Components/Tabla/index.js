import React from "react";
import { Categorias } from "../UI/Categorias";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BtnEditar, BtnRemove } from "../UI/index";

const BasicTable = () => {

    const categorias = Categorias

    const tableStyles = {
        display:'flex',
        justifyContent:'center',
        backgroundColor: '#000000E5',};
      const cellStyles = {
        color: '#FFF', // Cambiar el color de la fuente
      };

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
            {categorias.map((row) => (
              <TableRow
                key={row.nombre}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={cellStyles}>{row.nombre}</TableCell>
                <TableCell align="left" sx={cellStyles}>{row.descripcion}</TableCell>
                <TableCell align="right" sx={cellStyles}><BtnEditar /></TableCell>
                <TableCell align="right" sx={cellStyles}><BtnRemove /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export const Tabla = () => {
    return <BasicTable />
} 