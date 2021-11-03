import React from 'react'
import './styles/Characters.css'
import { useCharacters } from '../hooks/useCharacters'

const URL = 'https://rickandmortyapi.com/api/character'

export const Characters = () => {
  const characters = useCharacters(URL)
  
  return (
    <div  className='Characters'>
      <div className="Characters-container">
        {characters.map(character => {
          return (
            <div>

              <div className='Characters-card'>
                <h3>{character.name}</h3> 
                <img src={character.image} alt="" />
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}
 