import React, {useState} from 'react'

const HeaderForm = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [cartItemsCount, setCartItemsCount] = useState(0);


  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Add logic here to change the language in your application
  };

  const handleAddToCart = () => {
    setCartItemsCount(prevCount => prevCount + 1);
    // Add logic here to add items to cart
  };

const logo = '/drive_e_c_logo.png'
const externalURL = 'https://driveelectriccolorado.org/';

  return (
    <div className='headerForm'>
     <a href={externalURL} target="_blank" rel="noopener noreferrer"> {/* Add link to external URL */}
        <img className='headImgForm' src={logo} alt='logo' />
      </a>  
    <div className='headerFormTitle'>
      <h1>NEW RESERVATION</h1>
      <h2>Drive Electric Colorado</h2>
    </div>
    
    <div className="header-buttons">
          <button className="cart-button" onClick={handleAddToCart}>
            <img src="./cart1.png" alt="cart" />
            <span className="cart-counter">{cartItemsCount}</span>
          </button>
       
        <select className='languageSelect'>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
     

    </div>
  )
}

export default HeaderForm
