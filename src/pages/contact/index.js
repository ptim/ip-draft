import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'
import Button from '../../components/Button'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const Contact = () => (
  <DefaultTemplateWrapper>
    <div className="Contact">
      <Helmet
        title="Contact - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              Reach out to the Interplay project team and see how Interplay Mapping can work for you.
            `,
          },
        ]}
      />

      <div className="slab slab--blue">
        <div className="container">
          <h1 className="underline">Get in touch!</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <Button to="/client-needs-survey" style="green">Find out how interplay can map to suit your needs</Button>
          <br />
          <br />
          <p>Contact Sheree at:</p>

          <ul>
            <li><a href="mailto:sheree@interplayproject.com">sheree@interplayproject.com</a></li>
            <li><a href="tel:+61438121473">+61 438 121 473</a>.</li>
          </ul>
        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default Contact
