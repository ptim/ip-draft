import React from 'react'
import Link from 'gatsby-link'

import styles from './Footer.module.scss'


const Footer = () => (
  <footer className={styles.Footer}>
    <div className="container">
      <div className="cols cols--padded">
        <div className="col--50">
          <ul>
            <li>Indigenous Evaluations</li>
            <li>Monitoring and Evaluation Frameworks</li>
            <li>Social Impact Assessment</li>
            <li>"Whole of System" Measurement and Mapping</li>
            <li>Holistic Wellbeing Assessments</li>
          </ul>
        </div>

        <div className="col--25 col--50--narrow">
          <ul>
            <li><Link to='/client-needs-survey'>Client needs survey</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/team'>Team</Link></li>
            <li><Link to='/pulications'>Pulications</Link></li>
            <li><Link to='/interplay-v1'>Interplay v1</Link></li>
            <li><Link to='/privacy'>Privacy</Link></li>
          </ul>
        </div>

        <div className="col--25 col--50--narrow">
          <div className={styles.socialIcons}>
            <ul>
              <li><a href="#">FB</a>{' '}</li>
              <li><a href="#">TW</a>{' '}</li>
              <li><a href="#">LI</a>{' '}</li>
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
