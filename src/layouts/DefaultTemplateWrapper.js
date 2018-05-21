import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import Footer from '../components/Footer'


const DefaultTemplateWrapper = ({ children }) => (
  <div className="DefaultTemplateWrapper">
    <Header />

    <div className="stickyBody">
      {children}
    </div>

    <Footer />
  </div>
)

DefaultTemplateWrapper.propTypes = {
  children: PropTypes.element,
}

export default DefaultTemplateWrapper
