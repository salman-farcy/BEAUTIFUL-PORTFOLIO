import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'


const navItems = [
     { name: "Hone", href: "#hero" },
     { name: "About", href: "#about" },
     { name: "Skills", href: "#skills" },
     { name: "Projects", href: "#projects" },
     { name: "Contact", href: "#contact" },
]

const Navbar = () => {
     const [isScrolled, setIsScrolled] = useState(false)
     const [isMenuOpen, setIsMenuOpen] = useState(false)

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 10)
          }

          window.addEventListener("scroll", handleScroll)

          return () => window.removeEventListener("scroll", handleScroll);
     }, [])

     return (
          <nav className={cn("fixed w-full z-20 transition-all duration-300",
               isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5")}>

               {/* Navigation area */}
               <div className="container flex items-center justify-between">
                    {/* Nave Logo */}
                    <a href="" className='text-xl font-bold text-primary flex items-center'>
                         <span className='relative z-45'>
                              <span className='text-glow text-foreground'>Salman </span> Farcy
                         </span>
                    </a>


                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 font-semibold">
                         {navItems.map((item) => (
                              <a href={item?.href} key={item?.name} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                   {item?.name}
                              </a>
                         ))}
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* mobile Nav */}
                    
                    <button className='z-45 md:hidden text-foreground p-1 ' aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} onClick={() => setIsMenuOpen((prev) => !prev)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>

                    <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center", "transition-all duration-300 md:hidden", isMenuOpen ? "opacity-80 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                         
                         <div className="flex flex-col items-center justify-center space-y-14 font-semibold">
                              {navItems.map((item) => (
                                   <a onClick={() => setIsMenuOpen(false)} 
                                   href={item?.href} key={item?.name} className=' text-foreground/80 hover:text-primary transition-colors duration-300'>
                                        {item?.name}
                                   </a>
                              ))}
                         </div>
                    </div>
               </div>
          </nav>
     )
}

export default Navbar
