import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'
import Figure from '../../components/Figure'

import ruralHealthSympImg from './5th-Rural-and-Remote-Health-Scientific-Symposium.png'


const Science = () => (
  <DefaultTemplateWrapper>
    <div className="Science">
      <Helmet
        title="Science - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              The Interplay Wellbeing Framework is scientifically and culturally validated.
            `,
          },
        ]}
      />

      <div className="slab slab--blue">
        <div className="container">
          <h1 className="underline">Science</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <p>
            The scientific story of the Interplay project is reported in the {' '}
            <a href="https://equityhealthj.biomedcentral.com/articles/10.1186/s12939-017-0563-5">{dedent`
              International Journal of Equity in Health:
              Interplay wellbeing framework: a collaborative methodology 'bringing together stories and numbers'
              to quantify Aboriginal cultural values in remote Australia`}
            </a>.
          </p>

          <p>The article describes the development, methodology and scientific validation of the Interplay Wellbeing Framework and indicators.</p>

          <blockquote>
            <p>{ dedent`
              The Interplay Wellbeing Framework and Survey were statistically validated as a collaborative approach
              to assessing wellbeing that is inclusive of other cultural worldviews, values and practices.
              New community-derived social and cultural indicators were established, contributing valuable insight
              to psychometric assessment across cultures. These analyses confirm that culture, empowerment and
              community play key roles in the interplay with education, employment and health, as part of a holistic
              and quantifiable system of wellbeing. This research supports the holistic concept of wellbeing
              confirming that everything is interrelated and needs to be considered at the 'whole of system'
              level in policy approaches.
            `}</p>
          </blockquote>

          <p>The Interplay team is well published; browse the complete list of our <a href="/publications">Publications</a>.</p>
        </div>
      </div>

      <div className="slab images">
        <div className="container">
          <div className="cols cols--padded">
            <div className="col--33">
              <h3>Interplay at TEDx St Kilda</h3>
              <iframe width="320" height="180" src={`https://www.youtube-nocookie.com/embed/Cf-dK8HFP2c?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              <p>
                What Aboriginal Knowledge can Teach us about Happiness. Sheree presents the Interplay project at <a href="https://youtu.be/Cf-dK8HFP2c">TEDx St Kilda 2016</a>
              </p>
            </div>

            <div className="col--33">
              <h3>Interplay at Impact7, 2017</h3>
              <iframe width="320" height="180" src={`https://www.youtube-nocookie.com/embed/944-fVw6tfg?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              <p>
                Interplay is presented at Impact7, 2017
              </p>
            </div>

            <div className="col--33">
              <h3>Measure the value of culture</h3>
              <Figure src={ruralHealthSympImg} alt="5th Rural and Remote Health Scientific Symposium" />
              <p>
                How do you measure the value of culture?
                Sheree gives a Lightning Talk at the {' '}
                <a href="http://www.ruralhealth.org.au/symposium2016/lightning-talks">5th Rural and Remote Health Scientific Symposium</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default Science
