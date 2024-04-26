import React from 'react'
import HeaderForm from './HeaderForm'

const Form = () => {
  return (
    <div className='formContainer'>
      <HeaderForm/>
        <form>
          <input type="text" placeholder='first name'></input>
          <input type="text" placeholder='last name'></input>
          <input type="text" placeholder='phone number'></input>

        </form>
    </div>
  )
}

export default Form
