import React from 'react'
import Link from 'gatsby-link'

import './Footer.css'


const Footer = () => (
  <footer className="Footer">
    <div className="container cols">
      <div className="col--50">
        <p>Two columns</p>
      </div>

      <div className="col--25 col--50--narrow">
        <Link to='#privacy'>Privacy</Link>
      </div>

      <div className="col--25 col--50--narrow">
        <div className="social-icons">
          <a href="#">FB</a>{' '}
          <a href="#">TW</a>{' '}
          <a href="#">LI</a>{' '}
        </div>
      </div>
    </div>

    <div className="Footer__copyright">
      <div className="container">
        Copyright © 2018
      </div>
    </div>
  </footer>
)

export default Footer
