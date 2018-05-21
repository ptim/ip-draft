import React from 'react'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const ClientNeeds = () => (
  <DefaultTemplateWrapper>
    <div className="ClientNeeds">

      <div className="slab">
        <div className="container">
          <h1 className="underline">Client Needs Survey</h1>

          <p>
            {/* https://docs.google.com/document/d/1o9YOl6iNRz7GDqhT5m_G_U2BXv8vf0Gl2BpH68Xl4wo/edit */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2wRqsAuHLcCvgTtRoPQ7NBH9gz-WpTGfWvPoJTHPvdbh5QQ/viewform">
              Client Needs Survey
            </a>
          </p>
        </div>
      </div>
    </div>
  </DefaultTemplateWrapper>
)

export default ClientNeeds
