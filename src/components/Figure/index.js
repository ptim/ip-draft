import React from 'react'


const Figure = ({src, alt}) => (
  <figure className="Figure">
    <div style={{
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      paddingBottom: '56.25%',
    }} />
  </figure>
)

export default Figure
