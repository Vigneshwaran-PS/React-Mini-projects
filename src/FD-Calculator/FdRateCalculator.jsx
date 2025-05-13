import React, { useState } from 'react'
import './FdRateCalculator.css'

const FdRateCalculator = () => {

    const [month,setMonth] = useState(0)
    const [res,setRes] = useState(null)
    const [showErrorMsg,setErroMsg] = useState(false)


    function handleOnchange(e){
        const val = e.target.value;

        // Allow empty string or numeric input only
        if (/^\d*\.?\d*$/.test(val)) {
           setMonth(val);
           setErroMsg(false)
         }

         setRes(null)
    }


    function calculate(){

        let rate = 0;

        if(month <= 0){
            setErroMsg(true)
            return
        }

        if(month < 3){
            rate = 5.8
        }else if(rate >= 3 || rate <= 6){
            rate = 6.5
        }else if(rate >= 7 || rate <= 9){
            rate = 6.8
        }else{
            rate = 7
        }

        setRes(rate)
        setErroMsg(false)

    }

  return (
    <div className='fd-wrapper'>

        <h3>FD Rate Calculator</h3>

        <div className="month">
        <input 
                type="text" 
                placeholder='Tenure months' 
                value={month}
                onChange={handleOnchange}
            />
        </div>
       
        <button onClick={calculate}>Calculate</button>


        {
           
            <div className="res">
                {res}
            </div>
        }

        {
            showErrorMsg &&

            <p>Please enter month..</p>
        }
    </div>
  )
}

export default FdRateCalculator