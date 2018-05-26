import React from 'react'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'
import Button from '../../components/Button'
import Figure from '../../components/Figure'

import styles from './Homepage.module.scss'
import bg from './ip-bg.jpg'
import pic1 from './pic-1.jpg'
import pic2 from './pic-2.jpg'
import pic3 from './pic-3.jpg'
import ipGraphic from './IP-graphic-16-9.png'


const Homepage = () => (
  <DefaultTemplateWrapper>
    <div className="Homepage">

      <div className={ styles.hero }>
        <div className="container">
          <div className="hero__content">
            <p className="alpha">Maps the connections to wellbeing</p>
          </div>
        </div>
      </div>

      <div className="slabs--alternating">
        <div className="slab">
          <div className="container">
            {/*<h2 className="underline">The Interplay Wellbeing Framework is a scientific mapping tool.</h2>*/}

            <Button to="/client-needs-survey" style="green">Find out how interplay can map to suit your needs</Button>
          </div>
        </div>

        <div className="slab images">
          <div className="container">
            <div className="cols cols--padded">
              <div className="col--33">
                <h3>Vision & Values</h3>
                <Figure src={pic1} alt="col 1" />
                {/*<Button to="#government" style='green'>Vision & Values</Button>*/}
              </div>

              <div className="col--33">
                <h3>Interplay at TEDx St Kilda</h3>
                <iframe width="320" height="180" src={`https://www.youtube-nocookie.com/embed/Cf-dK8HFP2c?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>

              <div className="col--33">
                <h3>Science</h3>
                <a href="/science"><Figure src={ipGraphic} alt="col 2" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="slab slab--blue">
          <div className="container">
            <h2 className="underline">Backstory</h2>

            <p>Our framework and indicators were designed from the ground-up over 6 years in Aboriginal communities in remote Australia.</p>

            <p>Developed as a collaboration between the Ninti One Foundation, the Australian Government’s Department of Prime Minister and Cabinet and Flinders University as part of the Cooperative Research Centre for Remote Economic Participation (CRC-REP)</p>

          </div>
        </div>

        {/*
        <div className="slab">
          <div className="container">
            <p>Our framework and indicators were designed from the ground-up over 6 years in Aboriginal communities in remote Australia.</p>

            <p>Developed as a collaboration between the Ninti One Foundation, the Australian Government’s Department of Prime Minister and Cabinet and Flinders University as part of the Cooperative Research Centre for Remote Economic Participation (CRC-REP)</p>
          </div>
        </div>
        */}

        <div className="slab images">
          <div className="container">
            <div className="cols cols--padded">
              <div className="col--33">
                <h2>How We Map Wellbeing</h2>
                <Figure src={pic1} alt="col 1" />
                <Button to="#government" style='green'>Government</Button>
              </div>

              <div className="col--33">
                <Figure src={pic3} alt="col 3" />
                <Button to="#philanthropy" style='blue'>Philanthropy</Button>
              </div>

              <div className="col--33">
                <h3>Interplay Wellbeing Framework</h3>
                <Figure src={pic2} alt="col 2" />
                <Button to="#community">Community</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="slab slab--green">
          <div className="container">
            <h2 className="underline">Stories from the Ground</h2>
          </div>
        </div>


        <div className="slab">
          <div className="container">
            <div className="cols cols--padded">
              <div className="col--33">
                <h3>Culture</h3>

                <iframe width="320" height="180" src="https://www.youtube-nocookie.com/embed/Rso0RqiX_-U?rel=0&amp;controls=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

                <p>This short documentary reveals the complexity of Aboriginal culture in remote Australia. It also suggests that connecting with culture - through being on country, speaking in language, and practising culture in the everyday - improves the wellbeing of Aboriginal people living in remote Australia.</p>
              </div>

              <div className="col--33">
                <h3>Education and Learning</h3>

                <iframe width="320" height="180" src="https://www.youtube-nocookie.com/embed/eY64yYhlSLw?rel=0&amp;controls=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

                <p>This video presents a range of perspectives on what can improve education outcomes for Aboriginal children living in remote Australia.</p>
              </div>

              <div className="col--33">
                <h3>Work</h3>

                <iframe width="320" height="180" src="https://www.youtube-nocookie.com/embed/79WB1ew-SXU?rel=0&amp;controls=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

                <p>What does meaningful work in remote Australia look like? Watch the responses here.</p>

                <p><Button to="/videos">See 30+ more videos</Button></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </DefaultTemplateWrapper>
)

export default Homepage
