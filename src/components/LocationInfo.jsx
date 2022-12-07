import React from 'react'

const LocationInfo = ({Location}) => {
    
  return (
    <article>
        <h2>{Location?.name}</h2>
        <ul>
            <li><span>Type:</span>{Location?.type}</li>
            <li><span>Dimension:</span>{Location?.dimension}</li>
            <li><span>Population:</span>{Location?.residents.length}</li>
        </ul>
    </article>

  )
}

export default LocationInfo