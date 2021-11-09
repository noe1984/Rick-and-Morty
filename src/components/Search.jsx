import React from 'react'

export const Search = ({searchRef, handleSearch}) => {
    return (
        <div className="Characters-search">
            <input type="text" ref={searchRef} onChange={handleSearch} placeholder='Buscar personaje...'/>
        </div>
    )
}
