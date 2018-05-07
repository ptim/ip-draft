import React from 'react'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'
import Button from '../../components/Button'
import Figure from '../../components/Figure'

import './homepage.css'
import bg from './ip-bg.jpg'
import pic1 from './pic-1.jpg'
import pic2 from './pic-2.jpg'
import pic3 from './pic-3.jpg'


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
        <div className="container centered">
          <Button to="#evaluation">Tell Us about your Evaluation Needs</Button>
        </div>
      </div>

      <div className="slab images">
        <div className="container">
          <div className="cols cols--padded">
            <div className="col--33">
              <Figure src={pic1} alt="col 1" />
              <Button to="#government">Government</Button>
            </div>

            <div className="col--33">
              <Figure src={pic3} alt="col 3" />
              <Button to="#philanthropic">Philanthropic</Button>
            </div>

            <div className="col--33">
              <Figure src={pic2} alt="col 2" />
              <Button to="#community">Community</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <h2>The Interplay Wellbeing Framework is a scientific mapping tool.</h2>
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
