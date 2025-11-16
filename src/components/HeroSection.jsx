import { ArrowDown, MoveDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
      <div className="container max-w-auto text-center z-10">
        <div className="space-y-6">
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
            <span className='text-primary opacity-0 animate-fade-in-delay-1'> Salman</span>
            <span className='text-gradient  opacity-0 animate-fade-in-delay-2'> Farcy</span>
          </h1>

          <p className='text-lg md:text-xl text-muted-foreground max-2-xl mx-auto opacity-0 animate-fade-in-delay-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Asperiores architecto perspiciatis accusamus dolore a. Aliquid dolore quaerat nobis error iusto?
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className='cosmic-button'>View My Work</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2  transform -translate-x-1/2 flex-col items-center animate-bounce ">
        <div className="size-12 border-2 border-primary flex items-center justify-center rounded-full">
          <MoveDown className='size-6' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
