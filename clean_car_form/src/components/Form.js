import React from 'react'
import HeaderForm from './HeaderForm'
import CardVehicle from './CardVehicle'
import TestDriveFormSection from './TestDriveFormSection'
import CustomerInfoSection from './CustomerInfoSection'


const Form = () => {
  return (
    <div className='formContainer'>
      <HeaderForm/>
      <TestDriveFormSection/>
      <CustomerInfoSection/>
       
        <div className=''>
        <CardVehicle/>
        <CardVehicle/>
      </div>
    </div>
  )
}

export default Form
