import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="IndexPage">
    <ul>
      <li><Link to="/survey-vis/">Survey Visualisation</Link></li>
      <li><Link to="/blog/adding-markdown-pages">Adding Markdown pages</Link></li>
    </ul>
  </div>
)

export default IndexPage
