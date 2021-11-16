import React from 'react'
import './styles/FavoriteItem.css'

export const FavoriteItem = ({favorites}) => {
    const favs = favorites.favorites
    return (
      <div className='FavoriteItem'>
        <h3 className='FavoriteItem-title'>Add your favs here</h3>
        <div className='FavoriteItem-map'>
          {favs.map(favorite => {
            return (
              <div className="FavoriteItem-detail" key={favorite.id}>
                    <img src={favorite.image} alt="" />
              </div>
              )
            })}
        </div>
      </div>
    )
}
