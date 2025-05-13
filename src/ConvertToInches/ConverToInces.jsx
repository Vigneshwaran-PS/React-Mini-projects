import React, { useState } from 'react'
import './ConvertToInces.css'

const ConverToInces = () => {

    const [cm,setCm] = useState(0)
    const [result,setResult] = useState(null)

    function updateState(e){
        const val = e.target.value;

         // Allow empty string or numeric input only
         if (/^\d*\.?\d*$/.test(val)) {
            setCm(val);
          }
    }

    function convertToInches(){
        setResult((Number(cm)/2.54).toFixed(2))
    }

  return (
    <>
       <div className="cm-to-inch-wrapper">
         <h3>Convert Centimeter to Inches</h3>

        <div className='cm-inch-container'>
            <input 
                type="text" 
                placeholder='Enter length in cm'
                onChange={updateState}
                value={cm}
            />

            <button onClick={convertToInches}>Convert to Inches</button>

            {
                result &&
                <div className="result">
                    {
                        result + " inches"
                    }
                </div>
            }
            
        </div>
       </div>
    </>
  )
}

export default ConverToInces