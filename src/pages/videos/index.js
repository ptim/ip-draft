import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const Video = ({id, children}) => (
  <div className="Video col--33">
    <iframe title={`Interplay Project: ${id}`} width="320" height="180" src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    <p>{children}</p>
  </div>
)

const Videos = () => (
  <DefaultTemplateWrapper>
    <div className="Videos">
      <Helmet
        title="Videos - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              Stories from the Interplay Project are told in the words of Aboriginal people in these beautiful short documentaries.
            `,
          },
        ]}
      />

      <div className="slab slab--blue">
        <div className="container">
          <h1 className="underline">Interplay Videos</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <p>Over 30 short documentary videos from the Interplay Project are embedded in the Interplay Wellbeing Framework, also available at the <a href="https://www.youtube.com/playlist?list=PLhGbPrpUa5d0FifxUiIiOZ55QRMCLXiXg">Interplay Youtube Channel</a>.</p>

          <p>
            These are available for use in any education or other applications that promotes the wellbeing meaning behind the messages.{' '}
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
              The videos are licensed under a {' '}
              Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
            </a>.
          </p>

          <p>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
              <img
                alt="Creative Commons License"
                style={{borderWidth: 0}}
                src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
              />
            </a>
          </p>

          <p>Please feel free to <a href="/contact">give us feedback</a> on how you are using these resources.</p>

          <p>For presentations, see <a href="/science/">Science</a>.</p>

          <div className="cols cols--padded">
            <Video id="szWl6WW4ctc">
              Marcus Lacey reveals the significance of working on the house rebuilding program after the Cyclone in Galiwin'ku, Elcho Island, NT.
            </Video>

            <Video id="UsQiQoprWKs">
              Musician Manuel Dhurrkay from the Saltwater Band explains how singing, dancing and playing music makes people proud of their culture.
            </Video>

            <Video id="Rso0RqiX_-U">
              This short documentary reveals the complexity of Aboriginal culture in remote Australia. It also suggests that connecting with culture - through being on country, speaking in language, and practising culture in the everyday - improves the wellbeing of Aboriginal people living in remote Australia.
            </Video>

            <Video id="gKqFfF7V64M">
              Aboriginal Ranger Fiona Marika explains the importance of bi-lingual education in strengthening cultural knowledge.
            </Video>

            <Video id="eY64yYhlSLw">
              This video presents a range of perspectives on what can improve education outcomes for Aboriginal kids living in remote Australia.
            </Video>

            <Video id="E4znHj4vKRo">
              Shot on location in Arnhem Land, Yolngu man Gathapura Mununggurr speaks about working on country, and how his identity is intricately tied to his culture, history and homelands.
            </Video>

            <Video id="wmmS-7kmxu0">
              Katherine artist and musician Tom E. Lewis speaks of his strong spiritual connection to country.
            </Video>

          </div>

        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default Videos
