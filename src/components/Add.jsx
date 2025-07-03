import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';

const Add = ({user}) => {
  const [form,setForm]=useState({
    productId:'',
    name:'',
    category:'',
    rating:''
  });
  let submitform=()=>{
    // Convert form state to JSON
    const jsonPayload = JSON.stringify({
      productId: form.productId,
      name: form.name,
      category: form.category,
      rating: form.rating
    });

    fetch('http://localhost:9000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonPayload
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    console.log("Form submitted", form);
  }
  let valueupdate=(e)=>{
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    > <TextField id="outlined-basic" label="ProductID*" variant="outlined" name="productId" 
    value={form.productId}
    onChange={valueupdate}/>
      <TextField id="outlined-basic" label="Name*" variant="outlined" name="name"
      value={form.name}
        onChange={valueupdate}/>
      <TextField id="filled-basic" label="Category*" variant="outlined" name="category"
      value={form.category}
      onChange={valueupdate}/>
      <TextField id="standard-basic" label="Rating*" variant="outlined" name="rating"
      value={form.rating} 
      onChange={valueupdate}/>
      <Button variant="contained" onClick={submitform} >Submit </Button>
      
    
    </Box>
  )
}

export default Add
