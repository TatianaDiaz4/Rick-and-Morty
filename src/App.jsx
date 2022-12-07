
import axios from 'axios'
import {useEffect, useState } from 'react'
import './App.css'
import LocationFilter from './components/LocationFilter'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import getRandomNumber from './utils/getRandomNumber'

function App() {
 
  const [Location, setLocation] = useState()
  const [LocationName, setLocationName] = useState("")
  
  const getDataDimension = (idDimension) => {
    if(idDimension) {
    const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => {
      alert("Not found this dimension")
      console.log(err)
      
  })
  
  } else {
    alert("Ingrese un valor")
  }
}

  useEffect(() => {
  const randomDimension = getRandomNumber()
  getDataDimension(randomDimension)
  }, [])

 

const handleSubmit = event => {
  event.preventDefault()
  const dimensionSearch = event.target.searchValue.value
  getDataDimension(dimensionSearch)
  }

const handleChangeInput = (event) => {
  setLocationName(event.target.value)
}

const getNewLocation = (URL, name) => {
  setLocationName(name)
  axios.get(URL)
  .then(res =>setLocation(res.data))
  .catch(err => console.log(err))
 
}

  return (
    <div className="App"> 
      <form onSubmit={handleSubmit}>
      <img className= "front-page" src="https://www.gamerfocus.co/wp-content/uploads/2022/09/rick_morty_temporada_6_episodios.jpeg" alt="" />
            <input className= "Box-One" id='searchValue' value={LocationName}type="text" onChange={handleChangeInput}  placeholder='search your dimension'/>
            <button className= "button-One" type='submit'>Search</button>
        </form>
        
      <LocationFilter LocationName={LocationName} getNewLocation={getNewLocation}/>
      <LocationInfo Location={Location} />
      <ResidentList Location ={Location} />
    </div>
    
  )
}

export default App
