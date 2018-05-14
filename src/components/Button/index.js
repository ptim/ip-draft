import React from 'react'
import Link from 'gatsby-link'

import styles from './Button.module.scss'


const Button = ({to, children}) => (
  <Link to={to} className={styles.Button}>
    {children}
  </Link>
)

export default Button
