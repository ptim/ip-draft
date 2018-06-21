import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const SharedSpace = () => (
  <DefaultTemplateWrapper>
    <div className="SharedSpace">
      <Helmet
        title="Shared Space - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              Bring community into the design with our 'shared space' approach to collaboration.
              Key partners work together equally in a conceptual shared workspace.
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
