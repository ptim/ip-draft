import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'

import banatjarlImg from './banatjarl.jpg'
import acrInterplayImg from './ACR-interplay-2014-03-11.jpg'
import interplayGrowLoopImg from './interplay-grow-loop.png'

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

      <div className="slab slab--blue">
        <div className="container">
          <h1 className="underline">Shared Space</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <h2 className="underline">We Believe in Wellbeing for all People</h2>

          <p>We work in a <em>Shared Space</em> through:</p>

          <blockquote>Two way learning  - Respect - Collaboration - Grass-roots - Passion - Fun - Impact</blockquote>

          <img src={banatjarlImg} alt="Image of jokes with the Banatjarl strong womens group" />

          <h2>Our 'Shared Space' Way of Working Together</h2>

          <p>We bring community into the design through our 'shared space' way of working together.  </p>

          <p>Programs are designed and evaluated based on shared measures of success</p>

          <p>Our approach is described in detail in this publication titled, <a href="https://equityhealthj.biomedcentral.com/articles/10.1186/s12939-017-0563-5"><em>Interplay wellbeing framework: a collaborative methodology 'bringing together stories and numbers' to quantify Aboriginal cultural values in remote Australia</em></a> published in the International Journal for Equity in Health.</p>


          <h2 className="underline">How does it work?</h2>

          <p>Each part of the process from design through implementation and evaluation is conducted in the conceptual 'shared space' between each of the key partner groups. </p>

          <p>All key groups collaborate at every level and every stage. All decisions, actions and communications <strong>must make sense and be accessible to each group</strong>. Having end-users involved in the design and implementation creates the strongest foundations for impact. </p>

          <p>This is a strength-based model of governance and capacity development, with strong foundations in science and policy impact.</p>


          <h2 className="underline">Community Consultation</h2>

          <p><em>Bring the voice of the community into the equation</em>.</p>

          <p>The people who understand the workings of the community best are the community members themselves.</p>

          <p>We work 'two-ways' to engage and empower the 'voice' of the community. </p>

          <p>Working at grass-roots levels, we sit and walk with community to build shared knowledge, understanding and capacity. We do this through yarning circles, focus groups and other conversations.</p>

          <p>Together we develop shared values and vision.</p>


          <h2 className="underline">Co-Design</h2>

          <p><em>Design for impact through genuine 'shared space' collaboration</em></p>

          <p>Through our 'shared space' approach, we collaborate to set values, goals and ways of working. </p>

          <p>We work with your community groups and key partners to co-design tailored Interplay maps, methodologies and data collection tools to best meet your needs. </p>

          <p>Your Interplay map will monitor progress in relation to a theory of change designed for your initiative.</p>

          <img src={acrInterplayImg} alt="Group photo of Aboriginal Community Researchers from Yolngu and Martu coutries" />


          <h2 className="underline">Bringing Together Stories and Numbers</h2>

          <p>Community knowledge and values are largely held in stories, but impact assessment relies heavily on numbers. </p>

          <p>We bring together stories and numbers to bring value to real world scenarios.</p>

          <p>We translate stories into numbers to be able to measure the things that are important to communities. We then analyse this information to generate statistical insights. The numbers are then translated back to stories to bring them to life. </p>


          <h2 className="underline">Participatory Action and Theory of Change</h2>

          <p><strong><em>Participatory Action</em></strong> Research is an approach that allows the participants or key stakeholder groups to participate in, and act towards, a common goal. </p>

          <p><strong><em>Theory of Change</em></strong> is a system of understanding how each action will come together to contribute to a big picture goal. This can be defined in some form of logic map. </p>

          <p>Both of these approaches allow for evaluation and reflection that can inform changes in direction or actions along the way to reach a goal. </p>

          <p><strong><em>Interplay mapping</em></strong> supports both Participatory Action and Theory of Change approaches to move from idea through measurement to impact.</p>

          <p>The diagram below describes the Interplay approach to create change.</p>

          <img src={interplayGrowLoopImg} alt="Interplay grow loop diagram" />

        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default SharedSpace
