import React from 'react'

const Header = () => {

const logo = '/drive_e_c_logo.png'
  return (
    <div className='header'>
        <img className='headImg' src={logo} alt='logo' />
      <h1>DRIVE ELECTRIC COLORADO</h1>
      <div>
        <button className='btnLogin'>LOGIN</button>   
    </div>
    </div>
  )
}

export default Header
