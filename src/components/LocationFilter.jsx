import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LocationFilter = ({LocationName, getNewLocation}) => {
  const [LocationsOptions, setLocationsOptions] = useState()
  
useEffect(() => {
    if(!LocationName) return setLocationsOptions()
    const URL = `https://rickandmortyapi.com/api/location?name=${LocationName}`
    axios.get(URL)
    .then(res =>setLocationsOptions(res.data.results))
    .catch(err => console.log(err))
}, [LocationName])

    return (
    <ul>
        {
        LocationsOptions?.map(LocationOption => <li onClick= {() => getNewLocation(LocationOption.url, LocationOption.name)} key={LocationOption.url}>{LocationOption.name}</li>)    
        }

    </ul>
  )
}

export default LocationFilter