import React from 'react'
import Link from 'gatsby-link'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const Video = ({id, children}) => (
  <div className="Video col--33">
    <iframe width="320" height="180" src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;controls=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    <p>{children}</p>
  </div>
)

const Videos = () => (
  <DefaultTemplateWrapper>
    <div className="Videos">

      <div className="slab">
        <div className="container">
          <h1 className="underline">Interplay Videos</h1>

          <p>Over 30 short documentary videos from the Interplay Project are embedded in the Interplay Wellbeing Framework, also available at the <a href="https://www.youtube.com/playlist?list=PLhGbPrpUa5d0FifxUiIiOZ55QRMCLXiXg">Interplay Youtube Channel</a>.</p>

          <p>These are freely available for use in any education or other applications that promotes the wellbeing meaning behind the messages.
            <b><br />TODO: should add a license to these.</b></p>

          <p>Please feel free to <a href="/contact">give us feedback</a> on how you are using these resources.</p>

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
