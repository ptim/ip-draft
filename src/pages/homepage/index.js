import React from 'react'
import Link from 'gatsby-link'

import './homepage.css'
import './ip-bg.jpg'
import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'



const Homepage = () => (
  <DefaultTemplateWrapper>
    <div className="Homepage">

      <div className="slab hero">
        <div className="container">
          <div className="hero__content">
          <p className="alpha">Using data to change practice</p>
          <p>Wellbeing through culture, collaboration and science</p>
          <p>We help different groups work together to design and evaluate programs based on shared measures of success</p>
        </div>
      </div>
      </div>


      <div className="slab">
        <div className="container">
          <ul>
            <li>Indigenous Evaluations</li>
            <li>Monitoring and Evaluation Frameworks</li>
            <li>Social Impact Assessment</li>
            <li>"Whole of System" Measurement and Mapping</li>
            <li>Holistic Wellbeing Assessments</li>
          </ul>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          The Interplay Wellbeing Framework is a scientific mapping tool…
        </div>
      </div>

      <div className="slab">
        <div className="container">
          Tell Us about your Evaluation Needs
        </div>
      </div>

      <div className="slab">
        <div className="container cols">
          <div className="col--50">
            INTERACTIVE (with descriptions)
          </div>

          <div className="col--50">
            <ul>
              <li>Working Together "Two Ways"</li>
              <li>Holistic</li>
              <li>Measuring Cultural Values</li>
              <li>Bringing Together Stories and Numbers</li>
              <li>Strength Based</li>
              <li>Culture Brokerage</li>
              <li>Scientifically Robust</li>
              <li>Statistical Mapping</li>
              <li>Flexible and Dynamic</li>
              <li>Shared Measures of Success</li>
              <li>Bespoke Designs</li>
              <li>Collective Impact</li>
              <li>Collaborative co-designs</li>
              <li>Evidence Based Systems</li>
              <li>Time Series Data</li>
              <li>Policy Insights</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <h2>Back story</h2>

          <p>Our framework and indicators were designed from the ground-up over 6 years in Aboriginal communities in remote Australia.</p>

          <p>Developed as a collaboration between the Ninti One Foundation, the Australian Government’s Department of Prime Minister and Cabinet and Flinders University as part of the Cooperative Research Centre for Remote Economic Participation (CRC-REP)</p>
        </div>
      </div>
    </div>
  </DefaultTemplateWrapper>
)

export default Homepage
