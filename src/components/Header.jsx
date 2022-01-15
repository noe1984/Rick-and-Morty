import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import './styles/Header.css'
import darkModeButton from './assets/dark.png'
import lightModeButton from './assets/light.png'

export const Header = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    const [buttonTheme, SetButtonTheme] = useState('Button-dark')
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
        theme === 'Light-mode'? setTheme('Dark-mode'): setTheme('Light-mode')
        buttonTheme === 'Button-dark'? SetButtonTheme('Button-light') : SetButtonTheme('Button-dark')
    } 

    return (
        <div className='Header'>
            <h1>Rick and Morty</h1>
            <button className={buttonTheme} onClick={handleClick}>
                <div className='Header-switch'>
                    {darkMode? <img src={lightModeButton} alt="" />: <img src={darkModeButton} alt="" />}
                </div>
            </button> 
        </div>
    )
}
