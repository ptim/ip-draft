import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className="TemplateWrapper">
    <Helmet
      title="Interplay Project"
      meta={[
        { name: 'description', content: 'TODO' },
        { name: 'keywords', content: 'TODO' },
      ]}
    />
    <Header />
    <div className="TemplateWrapper__body">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
