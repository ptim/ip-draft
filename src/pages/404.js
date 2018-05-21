import React from 'react'

import DefaultTemplateWrapper from '../layouts/DefaultTemplateWrapper'


const NotFoundPage = () => (
  <DefaultTemplateWrapper>
    <div className="NotFoundPage">
      <div className="slab">
        <div className="container">
          <h1 className="underline">Page Not Found!</h1>

          <p>
            Sorry we can't find what you're looking for!
          </p>

        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default NotFoundPage
