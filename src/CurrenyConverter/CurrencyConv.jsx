import React, { useEffect, useReducer, useState } from 'react'
import './CurrencyConv.css'
import cur from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/sl_020622_4930_01.jpg'


function reduce(state,action){
    switch(action.type){
        case 'UPDATE_AMOUNT':
            return {...state,amount:action.payload.match(/^(\d+\.?\d{0,2})?$/) ? action.payload : state.amount,}
        case 'UPDATE_FROM_CURRENCY':
            return {...state,fromVal:action.payload}
        case 'UPDATE_TO_CURRENCY':
            return {...state,toVal:action.payload}
        case 'UPDATE_EXCHANGE_RATE':
            return {...state,exchangeRate:action.payload}
        case 'UPDATE_RESULT':
            return {...state,res:action.payload}
        default:
            return state
    }
}

const initialState = {
    amount : 1,
    fromVal : 'INR',
    toVal : 'USD',
    res : null,
    exchangeRate : null
}

const CurrencyConv = () => {

    const [state,dispatch] = useReducer(reduce,initialState)

    useEffect(() => {

        const getExchangeRate = async() => {

            try{
                
                let url = `https://api.exchangerate-api.com/v4/latest/${state.fromVal}`

                const response = await fetch(url)
                console.log(response)

                const responseJson = await response.json()
                console.log(responseJson)

                let exchangeRate = await responseJson.rates[state.toVal]
                dispatch({type:'UPDATE_EXCHANGE_RATE',payload:exchangeRate})
                console.log("broo"+state.exchangeRate)
            
            }catch(e){
                console.log("Error occured while fetching exchane rate")
            }
        }

        getExchangeRate()
    },[state.fromVal,state.toVal])


    useEffect(()=> {

        if(state.exchangeRate !== null) {
            dispatch({type:'UPDATE_RESULT',payload: (state.amount * state.exchangeRate).toFixed(2)})
        }

    },[state.amount,state.exchangeRate])

  return (
    <div className='cur-container'>
        <div className="cur-wrapper">
            <picture className='cur-pic'>
                <img src={cur} alt="" width="100%" height="300px"/>
            </picture>
            <div className="cur-content">
                <h2>Currency Converter</h2>

                <div className="amount">
                    <h4>Amount:</h4>
                    <input type="text" 
                            value={state.amount}
                            onChange={(e)=>dispatch({type:'UPDATE_AMOUNT',payload:e.target.value})}
                    />
                </div>

                <div className="from-cur">
                    <h4>From Currency:</h4>
                    <select name="" id="" 
                            value={state.fromVal}
                            onChange={(e)=>dispatch({type:"UPDATE_FROM_CURRENCY",payload:e.target.value})}> 
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="USD">USD - United States Dollar</option>
                    </select>
                </div>

                <div className="to-cur">
                    <h4>To Currency:</h4>
                    <select name="" id="" 
                            value={state.toVal}
                            onChange={(e)=>dispatch({type:"UPDATE_TO_CURRENCY",payload:e.target.value})}> 
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="USD">USD - United States Dollar</option>
                    </select>
                </div>

                <div className="buttons">
                    <button disabled>{state.amount} {state.fromVal} is equal to {state.res} {state.toVal}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrencyConv