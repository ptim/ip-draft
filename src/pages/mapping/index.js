import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const SharedSpace = () => (
  <DefaultTemplateWrapper>
    <div className="SharedSpace">
      <Helmet
        title="Interplay Mapping - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              Interplay is a scientific mapping tool that measures wellbeing holistically.
            `,
          },
        ]}
      />

      <div className="slab">
        <div className="container">
          <h1 className="underline">SharedSpace</h1>

          <p>
            TODO
          </p>

        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default SharedSpace
