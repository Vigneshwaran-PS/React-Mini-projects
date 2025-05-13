import React, { useState } from 'react'
import './WordsCalculator.css'


const WordsCalculator = () => {

    const [val,setVal] = useState(null)
    const [res,setRes] = useState(0)


    function calculateLength(e) {
        let text = e.target.value;
        setVal(text)
        setRes(Number(text.length))
    }

  return (
    <div className='words-conatiner'>

        <h3>Length Converter</h3>
        <h4>Type a sentence</h4>
        <textarea name="" id="" onChange={calculateLength}></textarea>

        {
            res &&
            <div className="result">
                {res} Letter{res !== 1 ? 's' : ''}
            </div>
        }
        
    </div>
  )
  
}

export default WordsCalculator