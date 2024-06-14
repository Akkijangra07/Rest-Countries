import React, { useState } from 'react'
// import CountryData from '../../../CountryData'
import CountryCard from '../Country Card/CountryCard'
import { useEffect } from 'react'




function CardContainer({query}) {
  let [countriesdata,setCountriesData] = useState([])

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>res.json())
    .then((data)=>{
      
      setCountriesData(data)
        })
  },[])
  
  
    const array = countriesdata
    .filter((country)=>country.name.common.toLowerCase().includes(query))
    .map((country)=>{
        return<CountryCard name={country.name.common} 
                           region={country.region}
                           capital={country.capital} 
                           population={country.population.toLocaleString("en-IN")}
                           flags={country.flags.png}/>
})

  return (
    <>
        {array}
    </>
  )
}

export default CardContainer
