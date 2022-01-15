import React from 'react'
import './styles/CharacterCard.css'

export const CharacterCard = ({characters, handleClick}) => {
    return characters.map(character => {
        return (
          
          <div className='Characters-card' key={character.id}>

            <div>
              <h3>{character.name}</h3> 
              <button type='button' onClick={() => handleClick(character)}>Add to favorites</button>
            </div>
            
            <img className='Characters-img' src={character.image} alt="" />

            <div className='Characters-info'>
              <p>Origin: {character.origin.name}</p>
              <small>Gender: {character.gender}</small><br />
              <small>Spicies: {character.species}</small><br />
              <small>Location: {character.location.name}</small>
            </div>

          </div> 

        )
    })
}

