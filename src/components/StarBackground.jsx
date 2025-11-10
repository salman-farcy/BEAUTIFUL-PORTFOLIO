import React, { useEffect, useState } from 'react'

// star key
// id, size, x, y, opacity, animationDuration

// meteor key
// id, size, x, y, delay, animationDuration

const StarBackground = () => {
     const [stars, setStars] = useState([])
     const [meteors, setMeteors] = useState([])

     useEffect(() => {
          generateStars();
          generateMeteors();

          const handleResize = () => {
               generateStars()
          }

          window.addEventListener("resize", handleResize);

          return () => window.removeEventListener("resize", handleResize)
     }, [])

     const generateStars = () => {
          const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000)
          const newStars = []
          const colors = ['#ffffff', '#8b75f6', '#ffeb08'];
          
          for (let i = 0; i < numberOfStars; i++) {
               const randomColor = colors[Math.floor(Math.random() * colors.length)]
               newStars.push({
                    id: i,
                    size: Math.random() * 3 + 1,
                    color: randomColor,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.9 + 0.9,
                    animationDuration: Math.random() * 4 + 2
               })
          }
          setStars(newStars);
     };

     const generateMeteors = () => {
          // const numberOfMeteors = Math.floor(window.innerWidth * window.innerHeight / 10000)
          const numberOfMeteors = 6
          const newMeteors = []
          for (let i = 0; i < numberOfMeteors; i++) {
               newMeteors.push({
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 20,
                    delay: Math.random() * 15,
                    animationDuration: Math.random() * 3 + 3
               })
          }
          setMeteors(newMeteors);
     };

     return (
          <div className="fixed inset-0 overflow-hideden pointer-events-none z-0 ">
               {stars.map(star => (
                    <div key={star.id}  style={{
                         width: star.size + 'px',
                         height: star.size + 'px',
                         backgroundColor: star.color,
                         left: star.x + '%',
                         top: star.y + '%',
                         opacity: star.opacity,
                         animationDuration: star.animationDuration + 's',
                    }} className="star animate-pulse-subtle drop-shadow-xl" >
                         
                    </div>
               ))}

               {meteors.map(meteor => (
                    <div key={meteor.id}  style={{
                         width: meteor.size * 50 + 'px',
                         height: meteor.size + 'px',
                         left: meteor.x + '%',
                         top: meteor.y + '%',
                         animationDelay: meteor.delay,
                         animationDuration: meteor.animationDuration + 's',
                    }} className="meteor animate-meteor drop-shadow-xl" >

                    </div>
               ))}
          </div>
     )
}

export default StarBackground
