import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

import './CartProductsDisplay.css';

const CartProductsDisplay = ({cart}) => {
  return (
    <TableContainer sx={{ width:'100%',maxWidth:'1200px', margin:'60px auto' }} component={Paper}>
      <Table sx={{ minWidth: 375 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" sx={{maxWidth:'100px',padding:0}}>
                <img style={{width:'100%',height:'100%', maxHeight:'114px',objectFit:'contain'}} src={row.URLimage} alt="" />
              </TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.categoria}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right">
                X
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartProductsDisplay