import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'

import groupPic from './IP-group-pic-1.jpg'


const About = () => (
  <DefaultTemplateWrapper>
    <div className="About">
      <Helmet
        title="About Us - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              The Interplay Project started as a national research project
              aiming to build a wellbeing framework from the ground up in
              remote Aboriginal communities from 2011-2017.
            `,
          },
        ]}
      />

      <div className="slab slab--green">
        <div className="container">
          <h1 className="underline">The Story behind The Interplay Project</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <p>
            The Interplay Project started as a national research project on wellbeing in remote Aboriginal and Torres Strait Islander communities conducted from 2011 to 2017. Wellbeing has been difficult to understand, measure and strengthen in remote Aboriginal and Torres Strait Islander communities, and part of the challenge has been genuinely engaging community members and incorporating their values and priorities into policy approaches.
          </p>

          <img src={groupPic} alt="Interplay Project community consultation" />

          <p>
            To improve Aboriginal wellbeing and to strengthen and empower communities, the markers of success need to be attainable and relevant, and reflect cultural strengths and community values. Aboriginal knowledge is passed down through stories, and governments mainly speak the language of numbers, so we developed a coordinated approach to merge Aboriginal knowledge and western science – by bringing together stories and numbers.
          </p>

          <p>
            Over six years, our team of researchers, community members and government representatives collaborated to design and implement a holistic Interplay Wellbeing Framework for remote Aboriginal and Torres Strait Islander communities. The framework integrates Aboriginal priorities of culture, empowerment and community, with the government priorities of education, employment and health. These priorities are integrated into this holistic model of wellbeing — represented by six main 'domains' — with wellbeing as the central domain.
          </p>

          <p>
            The Interplay Wellbeing Framework was developed as a collaboration between the <a href="https://www.nintione.com.au/">Ninti One Foundation</a>, the Australian Government's Department of the Prime Minister and Cabinet and Flinders University as part of the Cooperative Research Centre for Remote Economic Participation (CRC-REP).
            {/*
              TODO: import content from http://crc-rep.com/interplay, then link to it here.
            */}
          </p>

          <p>
            You can read more about the research methodology in our report, published in the <a href="https://equityhealthj.biomedcentral.com/articles/10.1186/s12939-017-0563-5">International Journal of Equity in Health</a>.
          </p>

          <h2>More about Interplay</h2>

          <ul>
            <li><a href="/team">Team</a></li>
            <li><a href="/publications">Publications</a></li>
          </ul>

        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default About
