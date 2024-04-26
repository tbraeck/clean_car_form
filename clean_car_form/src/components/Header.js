import React from 'react'

const Header = () => {

const logo = '/drive_e_c_logo.png'
const externalURL = 'https://driveelectriccolorado.org/';
  

  return (
    <div className='header'>
      <a href={externalURL} target="_blank" rel="noopener noreferrer"> {/* Add link to external URL */}
        <img className='headImg' src={logo} alt='logo' />
      </a>      
        <h1>DRIVE ELECTRIC COLORADO</h1>
      <div>
        <button className='btnLogin'>LOGIN</button>   
    </div>
    </div>
  )
}

export default Header
