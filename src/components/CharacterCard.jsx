import React from 'react'
import './styles/CharacterCard.css'

export const CharacterCard = ({characters, handleClick}) => {
    return characters.map(character => {
        return (
          <div className='Characters-card' key={character.id}>
            <h3>{character.name}</h3> 
            <button type='button' onClick={() => handleClick(character)}>Add to favorites</button>
            <img src={character.image} alt="" />
          </div>
        )
    })
}

