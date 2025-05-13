import React, { useEffect, useState } from 'react'
import './ColorFlipper.css'

const ColorFlipper = () => {

    const colorCodes = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','a','b','c','d','e','f']

    const [color,setColor] = useState(null)

    useEffect(() => {
        setColor()
    },[])


    function getColor() {
        
        let hashCode = '#'

        for(let i=1; i<=6; i++){
            hashCode = hashCode+colorCodes[randomIndex()]
        }
        console.log(hashCode)
        setColor(hashCode)
    }


    function randomIndex(){
        let random =  Math.floor(Math.random() * colorCodes.length)
        console.log(random)
        return random
    }

  return (
    <div className='color-flipper-wrapper'>
        <h3>Color Flipper </h3>
        <div 
            className="color-flipper-container"
            style={{backgroundColor : color != null ? color : 'none'}}
        >
            <button onClick={getColor}>Click Me</button>
        </div>
    </div>
  )
}

export default ColorFlipper