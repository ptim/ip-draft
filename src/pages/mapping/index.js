import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const Mapping = () => (
  <DefaultTemplateWrapper>
    <div className="Mapping">
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

      <div className="slab slab--blue">
        <div className="container">
          <h1 className="underline">Interplay Mapping</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">

          <p>Interplay is a scientific mapping tool that can measure wellbeing holistically. </p>

          <p>We bring community into the design, to evaluate programs based on shared values, vision and measures of success. </p>

          <p>Find out about our <a href="/shared-space/">shared space</a> way of working together. </p>

          <p>We work with you to design an Interplay Map for your needs.</p>


          <h2 className="underline">Holistic Wellbeing</h2>

          <p><em>Understand wellbeing at a holistic or 'whole of system' level</em></p>

          <p>Wellbeing is holistic and influenced by many interrelating factors. </p>

          <p>Interplay is a 'whole of system' statistical mapping tool. </p>

          <p>To honour the holistic nature of wellbeing and understand how everything hangs together we take a systems approach to data analysis. </p>

          <p>Interplay Mapping can provide statistical measures of:</p>

          <ul>
            <li>Wellbeing and how it changes over time </li>
            <li>Cultural and community values and priorities</li>
            <li>Individuals and groups</li>
            <li>Interrelationships between contributing factors</li>
            <li>Impacts of programs and interventions</li>
            <li>Key pathways and areas for investment to optimise wellbeing cost-effectively</li>
          </ul>

          <h2 className="underline">Services Mapping</h2>

          <p><em>Maximise impact by working together efficiently</em></p>

          <p>Interplay mapping can be used to understand the roles and impacts of different services by putting the person at the centre of services mapping. </p>

          <p>Understanding the roles and integration of different services working on overlapping goals is essential to minimise duplication and maximise their impact efficiently. </p>

          <p>Interplay maps are a way of developing collaborative partnership and integrated services models, for efficient and effective service delivery. </p>


          <h2 className="underline">Impact Assessment</h2>

          <p><em>Know that you are making a difference</em></p>

          <p>How do you know if your investment is making a difference?</p>

          <p>We help communities, governments and not-for-profit investors work together to design, scientifically map and evaluate wellbeing impacts based on shared measures of success. </p>

          <p>Evaluation tools and methods are often applied without cultural or scientific validation to measure impact, limiting the quality of data and its ability to inform evidence based practice. </p>

          <p>A collaborative and robust evidence base is needed to execute programs that make a difference with accountability and efficiency. </p>

          <p>Our approach is both strength-based and evidence-based, and has been <a href="/science/">culturally and scientifically validated</a>.</p>

          <p>Interplay maps can be used to show:</p>

          <ul>
            <li>Impact pathways</li>
            <li>Baseline data </li>
            <li>Change over time</li>
            <li>Comparisons</li>
          </ul>

          <p>Interplay is for any group needing to design and evaluate impact based on a holistic approach and community values.</p>

          <p>This includes community organisations, government departments, impact investors and industry groups.</p>

          <p>Applications include wellbeing monitoring, evaluation, social impact assessment, social return of investment and impact investing.</p>

          <p>It can be applied in any sector that aims to measure wellbeing impacts, including:</p>

          <ul>
            <li>Education </li>
            <li>Cultural and Empowerment Programs</li>
            <li>Employment</li>
            <li>Health </li>
            <li>Social and Emotional Wellbeing</li>
            <li>Ranger Programs</li>
            <li>Justice </li>
            <li>Healing </li>
            <li>Environment</li>
            <li>Housing </li>
            <li>Trauma</li>
            <li>Service Delivery</li>
            <li>Substance Use</li>
            <li>Disabilities</li>
            <li>Financial Resilience</li>
            <li>Child Health </li>
            <li>Rehabilitation Services</li>
            <li>Aged care</li>
          </ul>

          <p>Our goal is to build collaboration and knowledge, to create programs that work.</p>


          <h2 className="underline">Pathways to Change</h2>

          <p><em>Invest where it counts to create change</em></p>

          <p>Find out where to invest to create change with Interplay mapping.</p>

          <p>Investment can be translated into genuine wellbeing impacts by mapping the pathways that need to be strengthened to actually improve people's lives.</p>

          <p>Specific questions can be addressed by changing the goal or outcome measure.</p>

          <p>For example,</p>

          <ul>
            <li>"What influences education outcomes?"</li>
            <li>"How does the financial resilience program impact wellbeing?"</li>
          </ul>

          <p>Interplay maps the statistical pathways to impact.</p>


          <h2 className="underline">Sustainable Impact</h2>

          <p><em>Build knowledge and practice to create long-term change</em></p>

          <p>Some of the greatest challenges for creating change through impact investment are:</p>

          <ul>
            <li>building and responding to a knowledge base of what works, and</li>
            <li>creating unifying approaches to suit diverse groups.</li>
          </ul>

          <p>When different evaluation methodologies and indicators are used in different places, the information can be limited to only informing practice in that place.</p>

          <p>By using consistent evaluation methods and indicators in different places, the message can be strengthened of strategies that work in many places. This is particularly important for generating a collective voice for community, through community-based indicators.</p>

          <p>We are working to build a knowledge base to inform sustainable change through applying a consistent and scientifically robust methodology that has flexible components to accommodate local diversities.</p>

          <p>Interplay maps are a way of building knowledge and practice for sustainable change.</p>

        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default Mapping
