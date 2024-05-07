import React from 'react'
import Header from './Header'
import GoToFormButton from './GoToFormButton'

const Home = () => {
  return (
    
    <div className='home'>
      <Header/>
      <div className='goToBtn'>
        <GoToFormButton/>
      </div>
    </div>
  )
}

export default Home
