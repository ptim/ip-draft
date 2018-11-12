import React from 'react'
import Link from 'gatsby-link'

import styles from './Button.module.scss'


const Button = ({to, className='default', children}) => (
  <Link to={to} className={`${styles.Button} ${styles[className]}`}>
    {children}
  </Link>
)

export default Button
