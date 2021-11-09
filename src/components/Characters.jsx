import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react'
import './styles/Characters.css'
import { useCharacters } from '../hooks/useCharacters'
import { CharacterCard } from './CharacterCard'
import { FavoriteItem } from './FavoriteItem'
import { Search } from './Search'

const URL = 'https://rickandmortyapi.com/api/character'

const initialState = {
  favorites: []
}

const favoritesReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITES': 
      return {
        ...state, 
        favorites: [...state.favorites, action.payload]
      }
    default: return state
  }
}

export const Characters = () => {
  const characters = useCharacters(URL)
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState)
  const [search, setSearch] = useState('')
  const searchRef = useRef('')

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITES', payload: favorite})
  }

  const handleSearch = useCallback(() => {
    setSearch(searchRef.current.value)
  },[])
  
  
  const filteredCharacters = useMemo(() => 
    characters.filter( character => {
      return character.name.toLowerCase().includes(search.toLowerCase())
    }),
    [characters, search] 
  )

  return (
    <div className='Characters'>
      <FavoriteItem favorites={favorites} />

      <Search searchRef={searchRef} handleSearch={handleSearch} />

      <div  className='Characters-container'>
        <div className="Characters-cards">
          <CharacterCard characters={filteredCharacters} handleClick={handleClick} />
        </div>
      </div> 

    </div>
  )
}

