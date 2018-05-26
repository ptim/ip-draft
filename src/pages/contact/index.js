import React from 'react'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const Contact = () => (
  <DefaultTemplateWrapper>
    <div className="Contact">

      <div className="slab slab--blue">
        <div className="container">
          <h1 className="underline">Get in touch!</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <p>Fill in the <a href="/client-needs-survey">Client Needs Survey</a>.</p>

          <ul>
            <li>email (req)</li>
            <li>phone</li>
            <li>gov, phil, comm?</li>
            <ul>
              <li>design an evaluation</li>
              <li>want to know more</li>
              <li>contact you</li>
            </ul>
            <li>message</li>
          </ul>
        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default Contact
