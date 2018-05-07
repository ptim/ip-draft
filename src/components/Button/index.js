import React from 'react'
import Link from 'gatsby-link'

import './Button.css'


const Button = ({to, children}) => (
  <Link to={to} className="Button">
    {children}
  </Link>
)

export default Button
