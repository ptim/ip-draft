import React from 'react'
import Link from 'gatsby-link'

import styles from './Button.module.scss'


const Button = ({to, style='default', children}) => (
  <Link to={to} className={`${styles.Button} ${styles[style]}`}>
    {children}
  </Link>
)

export default Button
