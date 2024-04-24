import React from 'react'

const Header = () => {

const logo = '/drive_e_c_logo.png'
  return (
    <div className='header'>
        <img className='headImg' src={logo} alt='logo' />
      <h3>DRIVE ELECTRIC COLORADO</h3>
      <div>
        <button className='btnLogin'>LOGIN</button>   
    </div>
    </div>
  )
}

export default Header
