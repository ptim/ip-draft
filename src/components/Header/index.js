import React from 'react'
import Link from 'gatsby-link'

import './Header.css'


const colours = {
  orange: '#f47721',
  blue: '#008fb4',
  green: '#82c341',
  smoke: '#414142',
  lightSmoke: '#cccccc',
}

const Header = () => (
  <nav className="Header">
    <div>
      <h1>
        <Link to="/">
          The Interplay Project
        </Link>
      </h1>
    </div>

    <ul className="Header__links">
      <li><Link to="/">link</Link></li>
      <li><Link to="/">link</Link></li>
    </ul>
  </nav>
)

export default Header
