import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';

const Add = ({user}) => {
  const [form,setForm]=useState({
    ProductID:'',
    Name:'',
    Category:'',
    Rating:0
  });
  let submitform=()=>{
  console.log("Form submited",form);
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
    > <TextField id="outlined-basic" label="ProductID*" variant="outlined" name="ProductID" 
    value={form.ProductID}
    onChange={valueupdate}/>
      <TextField id="outlined-basic" label="Name*" variant="outlined" name="Name"
      value={form.Name}
        onChange={valueupdate}/>
      <TextField id="filled-basic" label="Category*" variant="outlined" name="Category"
      value={form.Category}
      onChange={valueupdate}/>
      <TextField id="standard-basic" label="Rating*" variant="outlined" name="Rating"
      value={form.Rating} 
      onChange={valueupdate}/>
      <Button variant="contained" onClick={submitform} >Submit </Button>
      
    
    </Box>
  )
}

export default Add
