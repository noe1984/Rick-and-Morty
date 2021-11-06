import React, { useReducer } from 'react'
import './styles/Characters.css'
import { useCharacters } from '../hooks/useCharacters'
import { CharacterCard } from './CharacterCard'
import { FavoriteItem } from './FavoriteItem'

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

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITES', payload: favorite})
  }

  return (
    <div className='Characters'>

      <FavoriteItem favorites={favorites} />

      <div  className='Characters-container'>
        <div className="Characters-cards">
          <CharacterCard characters={characters} handleClick={handleClick} />
        </div>
      </div> 

    </div>
  )
}

