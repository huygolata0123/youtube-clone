import React from 'react'
import { useParams } from 'react-router'
const SearchScreen = () => {
    const {query} = useParams()
    console.log(query)
    return (
        <div>
            Search
        </div>
    )
}

export default SearchScreen
