import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import Footer from '../components/Footer'


const DefaultTemplateWrapper = ({ children }) => (
  <div className="DefaultTemplateWrapper">
    <Header />

    {children}

    <Footer />
  </div>
)

DefaultTemplateWrapper.propTypes = {
  children: PropTypes.element,
}

export default DefaultTemplateWrapper
