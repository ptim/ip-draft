import React from 'react'
import Link from 'gatsby-link'

import './Header.scss'
import styles from './navigation.module.scss'
import './interplay-logo.png'


const Header = () => (
  <nav className="Header">
    <span>
      <Link to="/">
        <span>The Interplay Project</span>
      </Link>
    </span>

    {/*
    <nav>
      <div className={styles.toggle}>
        toggle
      </div>

      <ul className={styles.collapsible}>
        <li><Link to="/client-needs-survey">Get Started</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    */}
  </nav>
)

export default Header
