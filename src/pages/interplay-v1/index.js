import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const InterplayV1 = () => (
  <DefaultTemplateWrapper>
    <div className="InterplayV1">
      <Helmet
        title="Interplay v1 - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              An interactive data visualisation of the Interplay Wellbeing Framework,
              bringing together stories and numbers through 30+ short videos and embedded statistics.
            `,
          },
        ]}
      />

      <div className="slab">
        <div className="container">
          <h1 className="underline">The Interplay Wellbeing Framework</h1>

          <p><a href="https://old.crc-rep.com/wellbeingframework/">www.crc-rep.com/wellbeingframework</a></p>

          <p>
            This is an interactive version of the Interplay Wellbeing Framework. It conveys the complexity of wellbeing.
            Importantly it is a "whole-of-system" approach, to understand how different components work together as part of an interconnected system.
          </p>

          <ul>
            <li>Click on each coloured rock to break out into its different parts.</li>
            <li>Hover over the lines to show the strength of each connection.</li>
            <li>Click the "play" button on each rock to see a video of community members telling the story in their own words.</li>
          </ul>

          <p>More information on the Interplay project (including publications) is available at <a href="http://crc-rep.com/interplay">crc-rep.com/interplay</a>.</p>
        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default InterplayV1
