import React from 'react'
import Link from 'gatsby-link'

import './Header.scss'
import './interplay-logo.png'


const Header = () => (
  <nav className="Header">
    <h1>
      <Link to="/">
        <span>The Interplay Project</span>
      </Link>
    </h1>

    <ul className="Header__links">
      <li><Link to="/">Get Started</Link></li>
      <li><Link to="/">Contact</Link></li>
      <li><Link to="/">About</Link></li>
    </ul>
  </nav>
)

export default Header
