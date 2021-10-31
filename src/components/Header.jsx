import React, { useState } from 'react'
import './styles/Header.css'

export const Header = () => {
    
    const [darkMode, setDarkMode] = useState(false)
    const handleClick = () => setDarkMode(!darkMode)

    return (
        <div className='Header'>
            <h1>Rick and Morty</h1>
            <button onClick={handleClick}>{darkMode? 'Dark Mode': 'Light Mode'}</button>
        </div>
    )
}
