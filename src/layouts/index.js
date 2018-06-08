import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './gatsby-normalize.scss'
// import './layout.scss'
// import './typography.scss'


const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet
      title="Interplay Project"
      meta={[
        { name: 'description', content: 'TODO' },
        { name: 'keywords', content: 'TODO' },
      ]}
    />
    {children()}
  </Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
