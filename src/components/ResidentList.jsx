import React from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({Location}) => {
  return (
        <section className='Location-residents'>
        {
          Location?.residents.map(urlResident => (
          <ResidentCard key={urlResident}urlResident=
          {urlResident}/>
          ))
        }
      </section>
    
  )
}

export default ResidentList
