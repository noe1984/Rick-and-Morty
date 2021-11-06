import React from 'react'
import './styles/FavoriteItem.css'

export const FavoriteItem = ({favorites}) => {
    const favs = favorites.favorites
    return (
      <>
      <h3 className='Favorite-title'>Add your favs here</h3>
      <div className='Favorite'>
        {favs.map(favorite => {
          return (
            <div className="Favorite-item" key={favorite.id}>
                  <img src={favorite.image} alt="" />
                </div>
            )
          })}
      </div>
      </>
    )
}
