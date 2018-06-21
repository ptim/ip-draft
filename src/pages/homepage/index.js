import React from 'react'
import Link from 'gatsby-link'
import FaPdf from 'react-icons/lib/fa/file-pdf-o';

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'
import Button from '../../components/Button'
import Figure from '../../components/Figure'

import styles from './Homepage.module.scss'

// header BG
import bg from './ip-bg.jpg'

// case studies
import imgLiteracy from '../case-studies/case-study-literacy.png'
import pdfLiteracy from '../case-studies/InterplayPoster3_Literacy_19Oct2016.pdf'

// logos
import centralDesertLandAndCommunityLogo from './logos/central-desert-land-and-community.png'
import childrensGroundLogo from './logos/childrens-ground.png'
import dawnAboriginalConsultancyLogo from './logos/dawn-aboriginal-consultancy.png'
import flindersUniLogo from './logos/flinders-uni.png'
import goodShepherdMocrofinanceLogo from './logos/good-shepherd-mocrofinance.png'
import hitnetLogo from './logos/hitnet.png'
import nagalaProjectLogo from './logos/nagala-project.png'
import nintiOneLogo from './logos/ninti-one.png'
import salvationArmyLogo from './logos/salvation-army.png'
import westernAusGovLogo from './logos/western-aus-gov.png'
import wunanLogo from './logos/wunan.png'
import yaluMarngithinyarawLogo from './logos/yalu-marngithinyaraw.png'


const Logo = ({src}) => (
  <div className={styles.logo} style={{backgroundImage: `url(${src})`}} />
)

const Homepage = () => (
  <DefaultTemplateWrapper>
    <div className="Homepage">

      <div className={ styles.hero }>
        <div className="container">
          <div className="hero__content">
            <p className="alpha">Maps the connections to wellbeing</p>

            <p>
              Interplay is a scientific mapping tool that measures wellbeing holistically.{' '}
              We bring community into the design, to evaluate programs based on shared measures of success.
            </p>
          </div>
        </div>
      </div>

      <div className="slabs--alternating">
        <div className="slab">
          <div className="container">
            <h2 className="underline">What We Do</h2>

            <div className="cols cols--padded">
              <div className="col--33">
                <h3>Community Consultation</h3>

                <p>Bring the voice of the community into the equation</p>
                {/*(SHARED SPACE)*/}
              </div>

              <div className="col--33">
                <h3>Co-Design</h3>

                <p>Design for impact through genuine 'shared space' collaboration</p>
                {/*(SHARED SPACE)*/}
              </div>

              <div className="col--33">
                <h3>Wellbeing Mapping</h3>

                <p>Understand the holistic system of wellbeing</p>
                {/*(MODELS PAGE)*/}
              </div>

              <div className="col--33">
                <h3>Services Mapping</h3>

                <p>Maximise impact by working together efficiently</p>
                {/*(MODELS PAGE)*/}
              </div>

              <div className="col--33">
                <h3>Impact Assessment</h3>

                <p>Know that you are making a difference</p>
                {/*(MODELS PAGE)*/}
              </div>

              <div className="col--33">
                <h3>Pathways for Change</h3>

                <p>Invest where it counts to create change</p>
                {/*(MODELS PAGE)*/}
              </div>
            </div>

            <Button to="/client-needs-survey" style="blue">Find out how interplay can map to suit your needs</Button>
          </div>
        </div>

        <div className="slabs--alternating">
          <div className="slab slab--green">
            <div className="container">
              <h2 className="underline">How we do it</h2>

              <ul>
                <li>We work together in a '<a href="/shared-space/">shared space</a>' where each of the key groups collaborate in every part of the project at every level</li>
                <li>We take a holistic or '<a href="/models/">whole of system</a>' approach to understand how all the parts are interconnected or 'interplay'</li>
                <li>We bring together <a href="/shared-space/">stories and numbers</a> to represent community values and priorities in a scientific framework</li>
                <li>Our approach is both strength-based and <a href="/science/">evidence based</a> to build sustainable impact</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="slabs--alternating">
          <div className="slab">
            <div className="container">
              <h2 className="underline">Case Study: Pathways to Education Success</h2>

              <p>900 Aboriginal adults were surveyed from 4 different remote Aboriginal communities. Interrelationships were identified with structural equation modeling. </p>

              <div className="cols">
                <div className="col--66">
                  <p>Better literacy outcomes from culture in school</p>

                  <ul>
                    <li>Education outcomes are much better for those who learn about their own culture at school, and learn Aboriginal literacy as a stepping stone to English literacy.</li>
                    <li>Culturally relevant curriculum and learning styles improves education outcomes.</li>
                  </ul>

                  <p>
                    <a href={pdfLiteracy}><FaPdf /> Download the Case Study</a> and <a href="/case-studies">read more case studies</a>.
                  </p>
                </div>

                <div className="col--33">
                  <img src={imgLiteracy} width={600} alt="Literacy structural equation model" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slab slab--blue">
          <div className="container">
            <h2 className="underline">Backstory</h2>

            <div className="cols">
              <div className="col--66">
                <p>Our framework and indicators were designed from the ground-up over 6 years in Aboriginal communities in remote Australia.</p>

                <p>Developed as a collaboration between the Ninti One Foundation, the Australian Government's Department of Prime Minister and Cabinet and Flinders University as part of the Cooperative Research Centre for Remote Economic Participation (CRC-REP)</p>
              </div>

              <div className="col--33">
                <iframe width="320" height="180" src={`https://www.youtube-nocookie.com/embed/Cf-dK8HFP2c?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
            </div>

          </div>
        </div>

        <div className="slab">
          <div className="container">
            <h2 className="underline">Stories from the Ground</h2>

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

        <div className="slab">
          <div className="container">
            <h2 className="underline">Who we work with</h2>

            <div className={styles.logoContainer}>
              <Logo src={nintiOneLogo} />
              <Logo src={flindersUniLogo} />
              <Logo src={yaluMarngithinyarawLogo} />
              <Logo src={childrensGroundLogo} />
              <Logo src={dawnAboriginalConsultancyLogo} />
              <Logo src={wunanLogo} />
              <Logo src={goodShepherdMocrofinanceLogo} />
              <Logo src={hitnetLogo} />
              <Logo src={centralDesertLandAndCommunityLogo} />
              <Logo src={nagalaProjectLogo} />
              <Logo src={salvationArmyLogo} />
              <Logo src={westernAusGovLogo} />
            </div>
          </div>
        </div>

      </div>
    </div>
  </DefaultTemplateWrapper>
)

export default Homepage
