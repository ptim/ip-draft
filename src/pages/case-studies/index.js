import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import {FaFilePdf} from 'react-icons/fa';

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'

import styles from './CaseStudies.module.scss'

// I've ordered these by the number in the the pdf title:
import pdfCulture from './InterplayPoster2_Culture_19Oct2016.pdf'
import pdfLiteracy from './InterplayPoster3_Literacy_19Oct2016.pdf'
import pdfEmployment from './InterplayPoster4_Empowerment_19Oct2016.pdf'
import pdfHealth from './InterplayPoster5_HolisticHealth_19Oct2016.pdf'
// import pdfNumeracy from './TODO.pdf'

import imgCulture from './case-study-culture.png'
import imgEmployment from './case-study-employment.png'
import imgLiteracy from './case-study-literacy.png'
import imgHealth from './case-study-health.png'
import imgNumeracy from './case-study-numeracy.png'



const CaseStudies = () => (
  <DefaultTemplateWrapper>
    <div className="CaseStudies">
      <Helmet
        title="Case Studies - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              See how Interplay maps show statistical pathways to wellbeing by bringing together stories and numbers.
            `,
          },
        ]}
      />

      <div className="slab slab--green">
        <div className="container">
          <h1 className="underline">Case Studies</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <p>900 Aboriginal adults were surveyed from 4 different remote Aboriginal communities. Interrelationships were identified with structural equation modeling. </p>

          <div className={styles.caseStudy}>
            <h2>Case Study: Pathways to Education Success</h2>

            <div className="cols">
              <div className="col--66">
                <p>Better literacy outcomes from culture in school</p>

                <ul>
                  <li>Education outcomes are much better for those who learn about their own culture at school, and learn Aboriginal literacy as a stepping stone to English literacy.</li>
                  <li>Culturally relevant curriculum and learning styles improves education outcomes.</li>
                </ul>

                <p>
                  <a href={pdfLiteracy}><FaFilePdf /> Download the Case Study</a> and read the paper in{' '}
                  <i>Educational Research for Policy and Practice</i>: {' '}
                  <a href="https://link.springer.com/article/10.1007%2Fs10671-017-9217-z">
                    The role of Aboriginal literacy in improving English literacy in remote Aboriginal communities: an empirical systems analysis with the Interplay Wellbeing Framework
                  </a>.
                </p>
              </div>

              <div className="col--33">
                <img src={imgLiteracy} width={600} alt="Literacy structural equation model" />
              </div>
            </div>
          </div>

          <div className={styles.caseStudy}>
            <h2>Case Study: It all comes back to Culture</h2>

            <div className="cols">
              <div className="col--66">
                <p>Practising culture empowers and leads to greater wellbeing</p>

                <ul>
                  <li>Practising culture builds empowerment and strengthens spirituality, both of which in turn improve wellbeing</li>
                  <li>Practising culture is the key to improving wellbeing for Aboriginal people in remote Australia</li>
                </ul>

                <p><a href={pdfCulture}><FaFilePdf /> Download the Case Study</a>.</p>
              </div>

              <div className="col--33">
                <img src={imgCulture} width={600} alt="Culture structural equation model" />
              </div>
            </div>
          </div>

          <div className={styles.caseStudy}>
            <h2>Case Study: Mental Health Key for Wellbeing</h2>

            <div className="cols">
              <div className="col--66">
                <p>Good mental health underlies better health and health services</p>

                <ul>
                  <li>Integrating services for physical and mental health problems improves wellbeing</li>
                  <li>Holistic approach to health services needed</li>
                </ul>
                <p><a href={pdfHealth}><FaFilePdf /> Download the Case Study</a>.</p>
              </div>

              <div className="col--33">
                <img src={imgHealth} width={600} alt="Health structural equation model" />
              </div>
            </div>
          </div>

          <div className={styles.caseStudy}>
            <h2>Case Study: Empowered to Study and Work</h2>

            <div className="cols">
              <div className="col--66">
                <p>Empowerment is the basis for better education and work outcomes</p>

                <ul>
                  <li>Successful pathways between education and employment depend on their capacity to build empowerment.</li>
                  <li>Policy and practice for education and employment that focuses on building empowerment underlies optimal wellbeing.</li>
                  <li>That is, the more they empower people the more likely they are to succeed.</li>
                </ul>

                <p>
                  <a href={pdfHealth}><FaFilePdf /> Download the Case Study</a> and read the paper in the{' '}
                  <i>The Australian Journal of Indigenous Education</i>:{' '}
                  <a href="https://www.cambridge.org/core/journals/australian-journal-of-indigenous-education/article/empowerment-is-the-basis-for-improving-education-and-employment-outcomes-for-aboriginal-people-in-remote-australia/D026A003D0E158151507040B941A1B7C/core-reader">
                    Empowerment is the Basis for Improving Education and Employment Outcomes for Aboriginal People in Remote Australia
                  </a>.
                </p>
              </div>

              <div className="col--33">
                <img src={imgEmployment} width={600} alt="Employment structural equation model" />
              </div>
            </div>
          </div>

          <div className={styles.caseStudy}>
            <h2>Case Study: Numbers and Forms opens doors</h2>

            <div className="cols">
              <div className="col--66">
                <p>Confidence with paperwork opens pathways to success</p>

                <p>60 Aboriginal adults were surveyed who had used a financial literacy program. Interrelationships were identified with structural equation modeling. </p>

                <ul>
                  <li>Confidence with numbers and filling out forms is a pivotal step to improving work outcomes, money knowledge, social and emotional health and wellbeing. </li>
                  <li>Empowerment is a key foundation upon which pathways to wellbeing are built.</li>
                </ul>

                {/* <a href={pdfNumeracy}><FaFilePdf /></a> */}
              </div>

              <div className="col--33">
                <img src={imgNumeracy} width={600} alt="Numeracy structural equation model" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default CaseStudies
