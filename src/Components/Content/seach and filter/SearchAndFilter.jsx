import React from 'react'

function SearchAndFilter({setQurey}) {
  return (
    <>
      <div className='searchAndFilter'>
        <div style={{boxShadow:"0px 0px 5px gray",borderRadius:"5px"}}>
          <button className='searchBtn'><i className="fa-solid fa-magnifying-glass" style={{padding:"13px",}}></i></button>
          <input id='search-input' type="text" placeholder='Search here...' onChange={(e)=>{
            setQurey(e.target.value.toLowerCase())
          }} style={{padding:"9px",borderLeft:"none",width:"250px"}}></input>
        </div>
        {/* <div>
        <select id="cars" name="cars" value="Filter by region...">
            <option value="volvo">Filter by region</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select>
        </div> */}
          
      </div>
    </>
  )
}

export default SearchAndFilter
