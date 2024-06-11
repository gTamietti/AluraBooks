import React from 'react'
import logo from '../../images/logo.svg'
import './logo.css'

function Logo() {
  return (
         <div className="logo">
          <img src={logo} alt="logo" className='logo-img'/>
          <p><strong>Alura</strong>Books</p>
        </div>
  )
}

export default Logo