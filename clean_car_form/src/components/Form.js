import React from 'react'
import HeaderForm from './HeaderForm'
import ItemSection from './ItemSection'
import TestDriveFormSection from './TestDriveFormSection'
import CustomerInfoSection from './CustomerInfoSection'
import Button from '@mui/material/Button';
import CarRentalIcon from '@mui/icons-material/CarRental';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';



const Form = () => {
  return (
    <div className='formContainer'>
      <HeaderForm/>
      <CarRentalIcon color='secondary' sx={{ fontSize: 100}}/>
      <TestDriveFormSection/>
      <CustomerInfoSection/>
      {/* <Button variant='contained' style={{
          backgroundColor: '#4681f4', 
          color: 'white'
        }}>Click Me!</Button> */}
        {/* <FormControl>
          <FormLabel>Enter Name</FormLabel>
          <TextField placeholder='Write you name here'></TextField>
          <Button>Submit</Button> */}
        {/* </FormControl> */}
        <ItemSection/>
        {/* <div className=''>
        <CardVehicle/>
        <CardVehicle/>
      </div> */}
    </div>
  )
}

export default Form
