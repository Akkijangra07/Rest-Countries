import React from 'react'
import Countrydeatils from '../Country details/Countrydeatils'



function CountryCard({name ,region,capital,population,flags}) {


  return (
    <>
      <a href={`/country?name=${name}`} onClick={()=>Countrydeatils()}>
       <div className='country-card' style={{display:"flex",float:"left",margin:"20px",alignItems:"center",justifyContent:"center", flexDirection:"column",borderRadius:"10px",width:"20rem",height:"24rem"}}>
        <img src={flags} alt="" style={{height:"12rem",width:"20rem",WebkitBorderTopLeftRadius:"8px",WebkitBorderTopRightRadius:"8px",borderBottom:"2px solid black"}}/>
        <br />
          <h2 style={{padding:"7px",overflowWrap:"break-word"}}>{name}</h2>

          
          <p>
            <b>Population : {population}</b>
          </p>
          <br />
          <p>
            <b>Region : {region}</b>
          </p>
          <br />
          <p>
            <b>Capital : {capital}</b>
          </p>
          <br />
       </div>
       </a>
    </>
  )
}


export default CountryCard
