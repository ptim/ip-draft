import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import './layout.css'

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet
      title="Interplay Project"
      meta={[
        { name: 'description', content: 'TODO' },
        { name: 'keywords', content: 'TODO' },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Open+Sans|Yanone+Kaffeesatz:700',
          rel: 'stylesheet',
        },
      ]}
    />
    {children()}
  </Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
