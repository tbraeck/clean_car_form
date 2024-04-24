import React from 'react'
import { Link } from 'react-router-dom'

const GoToFormButton = () => {
  return (
      <button type="button">
        <Link to='/form' style={{textDecoration: 'none', color: "white"}}>
            BOOK EV TEST DRIVE
        </Link>
      </button>
  )
}

export default GoToFormButton
