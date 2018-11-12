import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './gatsby-normalize.scss'
import './layout.scss'
import './font-mairy.css'
import './font-open-sans.css'
import './typography.scss'


const DefaultTemplateWrapper = ({ children }) => (
	<Fragment>
	  <Helmet
	    title="Interplay Project"
	    meta={[
	      { name: 'description', content: 'Reach your goals by mapping the connections to wellbeing. Interplay maps are holistic, scientific and collaborative.' },
	      { name: 'keywords', content: 'Wellbeing, Indigenous, Holistic, Survey, Map, Mapping, Aboriginal' },
	    ]}
	  />
		  <div className="DefaultTemplateWrapper">
		    <Header />

		    <div className="stickyBody">
		      {children}
		    </div>

		    <Footer />
		  </div>
	</Fragment>
)

DefaultTemplateWrapper.propTypes = {
  children: PropTypes.element,
}

export default DefaultTemplateWrapper
