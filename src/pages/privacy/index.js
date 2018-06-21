import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const Privacy = () => (
  <DefaultTemplateWrapper>
    <div className="Privacy">
      <Helmet
        title="Privacy - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              Privacy Policy
            `,
          },
        ]}
      />

      <div className="slab">
        <div className="container">
          <h1 className="underline">Privacy</h1>

          <p>
            TODO
          </p>

        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default Privacy
