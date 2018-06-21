import React from 'react'
import Link from 'gatsby-link'
import FaFacebook from 'react-icons/lib/fa/facebook-square';

import MailchimpSignup from './MailchimpSignup'
import styles from './Footer.module.scss'


const Footer = () => (
  <footer className={styles.Footer}>
    <div className="container">
      <div className="cols cols--padded">
        <div className="col--33">
          <ul>
            <li><Link to='/client-needs-survey'>Map Your Needs</Link></li>
            <li><Link to='/mapping'>Interplay Mapping</Link></li>
            <li><Link to='/shared-space'>Shared Space</Link></li>
          </ul>
        </div>

        <div className="col--33">
          <ul>
            <li><Link to='/science'>Science</Link></li>
            <li><Link to='/case-studies'>Case Studies</Link></li>
            <li><Link to='/publications'>Publications</Link></li>
            <li><Link to='/interplay-v1'>Interplay Data Vis</Link></li>
            <li><Link to='/videos'>Videos</Link></li>
          </ul>
        </div>

        <div className="col--33">
          <div className={styles.socialIcons}>
            <ul>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/team'>Team</Link></li>
              <li>
                <a href="https://www.facebook.com/shereecairney/" title="Interplay Facebook Page"><FaFacebook /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.Footer__copyright}>
      <div className="container">
        Copyright © 2018
      </div>
    </div>
  </footer>
)

export default Footer
