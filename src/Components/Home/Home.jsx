import React from 'react'
import SearchAndFilter from "../Content/seach and filter/SearchAndFilter"
import CardContainer from '../Card-container/CardContainer'
import { useState } from 'react'


function Home() {
    const [query , setQurey] = useState('')

  return (
    <>
        <SearchAndFilter setQurey={setQurey}/>
      <CardContainer query={query}/>
    </>
  )
}

export default Home
