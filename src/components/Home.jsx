import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Home = () => {
 
  
const [products,setProducts]=useState([]);
//using use effect to load data in beginning
useEffect(()=>{
axios.get('http://localhost:9000/products').then((res)=>{
  setProducts(Array.isArray(res.data) ? res.data : res.data.products || []);
})
.catch((error)=>{
  console.log("Error while fetching data");
})},[])
  // Function to handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.log("Error while deleting product");
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ProductID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Category&nbsp;</TableCell>
            <TableCell align="right">Rating&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.productId}
              </TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right">{product.rating}</TableCell>
               <TableCell align="right">
                 <button onClick={() => handleDelete(product._id)}>delete</button>
               </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home

