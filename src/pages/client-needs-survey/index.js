import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const ClientNeeds = () => (
  <DefaultTemplateWrapper>
    <div className="ClientNeeds">
      <Helmet
        title="Map Your Needs (survey) - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              Get started towards designing an Interplay Map to suit your needs by filling in this survey.
            `,
          },
        ]}
      />

      <div className="slab slab--orange">
        <div className="container">
          <h1 className="underline">Map Your Needs</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeQOuyGlBj45eWB9aA0CCtDcWAnam6uj29x2EedBcfm1T49CQ/viewform?embedded=true"
            width="960"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >Loading...</iframe>
        </div>
      </div>
    </div>
  </DefaultTemplateWrapper>
)

export default ClientNeeds
