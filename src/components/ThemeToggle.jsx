import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
     const [isDarkMode, setIsDarkMode] = useState(false)

     useEffect(() => {
          const storedTheme = localStorage.getItem('theme')
          if(storedTheme === 'dark') {
               setIsDarkMode(true)
               document.documentElement.classList.add('dark')
          }
          else{
               setIsDarkMode(false)
               document.documentElement.classList.remove('dark')
          }
     }, [])

     const toggleTheme = () => {
          if(isDarkMode) {
               setIsDarkMode(false)
               document.documentElement.classList.remove('dark') 
               localStorage.setItem('theme', 'light')
          }
          else {
               document.documentElement.classList.add('dark')
               setIsDarkMode(true)
               localStorage.setItem('theme', 'dark')
          }
     }

     return <button onClick={toggleTheme}> {isDarkMode ? (<Sun className="size-6 text-yellow-300" />) : (<Moon className="size-6 text-blue-900" />)} </button>
}

export default ThemeToggle
