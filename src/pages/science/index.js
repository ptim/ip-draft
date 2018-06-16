import React from 'react'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'
import Figure from '../../components/Figure'

import ruralHealthSympImg from './5th-Rural-and-Remote-Health-Scientific-Symposium.png'


const Science = () => (
  <DefaultTemplateWrapper>
    <div className="Science">

      <div className="slab slab--blue">
        <div className="container">
          <h1 className="underline">Science</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <p>
            The scientific story of the Interplay project is reported in the {' '}
            <a href="https://equityhealthj.biomedcentral.com/articles/10.1186/s12939-017-0563-5">International Journal of Equity in Health</a>.
          </p>

          <p>The article describes the development, methodology and scientific validation of the Interplay Wellbeing Framework and indicators.</p>

          <p>The Interplay team is well published; see our <a href="/publications">Publications</a>.</p>
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
