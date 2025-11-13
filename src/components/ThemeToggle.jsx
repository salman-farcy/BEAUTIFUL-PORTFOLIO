import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

const ThemeToggle = () => {
     const [isDarkMode, setIsDarkMode] = useState(false)

     useEffect(() => {
          const storedTheme = localStorage.getItem('theme')
          if (storedTheme === 'dark') {
               setIsDarkMode(true)
               document.documentElement.classList.add('dark')
          }
          else {
               setIsDarkMode(false)
               document.documentElement.classList.remove('dark')
          }
     }, [])

     const toggleTheme = () => {
          if (isDarkMode) {
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

     return (
          <button onClick={toggleTheme} className={cn("z-50 max-md:hidden cursor-pointer  p-2 rounded-full transition-colors duration-300",
               "focus:outline-hidden"
          )}>
               {isDarkMode ? (<Sun className="size-6 text-yellow-300" />)
                    : (<Moon className="size-6 text-blue-900" />)}
          </button>
     )
}

export default ThemeToggle
