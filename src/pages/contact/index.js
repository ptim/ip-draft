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

          <p>Alternatively, contact Sheree on <tel>+61 438 121 473</tel>.</p>

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
