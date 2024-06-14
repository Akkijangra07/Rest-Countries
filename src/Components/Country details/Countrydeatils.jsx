import React, { useEffect, useState } from 'react'
import './countryDetails.css'

function Countrydeatils() {
    let countryName = new URLSearchParams(location.search).get('name')
    let [countryData , setCountryData] = useState({})
    console.log(countryName)
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res)=>res.json())
        .then(([data])=>{
            
            setCountryData({
                name:data.name.common,
                flag:data.flags.png,
                population:data.population.toLocaleString("en-IN"),
                region:data.region,
                capital:data.capital,
                language:Object.values(data.languages).join(','),
                currency:Object.values(data.currencies).map((currency)=>currency.name).join(", "),
                nativeName:Object.values(data.name.nativeName)[0].common,
                tld:data.tld,
                // borders : Object.values(data.borders).map((border)=>border).join(", "),
                subRegion:data.subregion,
            })
        })
        .catch((error)=>console.error("API is slow Today.Try after sometime...",error.message));
    },[])
  return (
        <>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}} className='countryDetailsContainer'>
            <div className='country-card' style={{display:"flex",float:"left",alignItems:"center",justifyContent:"center", flexDirection:"column",borderRadius:"10px",maxWidth:"25rem",transform:"none",margin:"1rem"}}>
            <img src={countryData.flag} alt="" style={{maxHeight:"12rem",maxWidth:"20rem",WebkitBorderTopLeftRadius:"8px",WebkitBorderTopRightRadius:"8px"}}/>
            <br />
            <h2 style={{overflowWrap:"break-word",textAlign:"center",padding:"0px 0px 15px 0px"}}>{countryData.name}</h2>
        </div>
        <div className='country-card' style={{display:"flex",margin:"2rem",alignItems:"start",justifyContent:"center", flexDirection:"column",borderRadius:"10px",width:"max-content",padding:"2rem",transform:"none",boxShadow:"none"}}>
          
          <p>
            <b>Population : {countryData.population}</b>
          </p>
          <br />
          <p>
            <b>Native Name : {countryData.nativeName}</b>
          </p>
          <br />
          <p>
            <b>Region : {countryData.region}</b>
          </p>
          <br />
          <p>
            <b>Sub-Region : {countryData.subRegion}</b>
          </p>
          <br />
          <p>
            <b>Capital : {countryData.capital} </b>
          </p>
          <br />
          <p>
            <b>Language : {countryData.language}</b>
          </p>
          <br />
          <p>
            <b>Currency : {countryData.currency}  </b>
          </p>
          <br />
          <p>
            <b>Top Level Domain : {countryData.tld}</b>
          </p>
          <br />
          {/* <p>
            <b>Border Countries : {countryData.borders}</b>
          </p>
          <br /> */}
       </div>
       </div>
       </>

  )
}

export default Countrydeatils
