import React from 'react'
import Link from 'gatsby-link'


const colours = {
  orange: '#f47721',
  blue: '#008fb4',
  green: '#82c341',
  smoke: '#414142',
  lightSmoke: '#cccccc',
}

const Header = () => (
  <div
    className="Header"
    style={{
      background: colours.blue,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Interplay Project
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
