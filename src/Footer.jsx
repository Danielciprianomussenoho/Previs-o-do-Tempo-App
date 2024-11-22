import axios from 'axios'
import React from 'react'
import "./footer.css"


const Footer = () => {
  const date = new Date()
  return (
    <div className='footer'>
      <h3>&copy;Daniel Cipriano Company {date.getFullYear()}</h3>
    </div>
  )
}

export default Footer