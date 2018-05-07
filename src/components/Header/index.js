import React from 'react'
import Link from 'gatsby-link'

import './Header.css'
import './interplay-logo.png'


const colours = {
  orange: '#f47721',
  blue: '#008fb4',
  green: '#82c341',
  smoke: '#414142',
  lightSmoke: '#cccccc',
}

const Header = () => (
  <nav className="Header">
    <h1>
      <Link to="/">
        <span>The Interplay Project</span>
      </Link>
    </h1>

    <ul className="Header__links">
      <li><Link to="/">link</Link></li>
      <li><Link to="/">link</Link></li>
    </ul>
  </nav>
)

export default Header
