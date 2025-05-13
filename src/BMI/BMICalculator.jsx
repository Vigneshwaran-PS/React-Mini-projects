import React, { useReducer } from 'react'
import './BMICalculator.css'
import pic from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/65Z_2112.w012.n001.20A.p20.20.jpg'
import { redirect } from 'react-router-dom';


function reduce(state, action) {
  switch (action.type) {
    case 'UPDATE_HEIGHT':
      return {
        ...state,
        height: action.payload.match(/^(\d+\.?\d{0,2})?$/) ? action.payload : state.height,
        heightError: false,
        weightError: false
      };
    case 'UPDATE_WEIGHT':
      return {
        ...state,
        weight: action.payload.match(/^(\d+\.?\d{0,2})?$/) ? action.payload : state.weight,
        heightError: false,
        weightError: false
      };
    case 'CLEAR':
      return { height: '', weight: '' };
    case 'CALCULATE':
        const height = parseFloat(state.height);
        const weight = parseFloat(state.weight);
      
        const heightError = isNaN(height) || height <= 0;
        const weightError = isNaN(weight) || weight <= 0;
      
        if (heightError || weightError) {
          return { ...state, heightError, weightError, bmi: '' };
        }
      
        const bmi = weight / ((height / 100) ** 2);
      
        // Determine BMI status
        let status = '';
        if (bmi < 18.5) status = 'Underweight';
        else if (bmi < 24.9) status = 'Normal weight';
        else if (bmi < 29.9) status = 'Overweight';
        else status = 'Obese';
      
        return { ...state, bmi: bmi.toFixed(2), status, heightError: false, weightError: false };    
    default:
      return state;
  }
}


const initialState = {
  height : '',
  weight : '',
  bmi : '',
  heightError: false,
  weightError: false
}

const BMICalculator = () => {

  const [state,dispatch] = useReducer(reduce,initialState)
  return (
    <div className='bim-container'>
      <div className="bmi-wrapper">
        <div className="image">
          <img src={pic} alt="" />
        </div>
        <div className="content">
          <h3>BMI CALCULATOR</h3>

          {
            (state.heightError || state.weightError) &&
            <p className='error'>Please enter valid height/weight</p>
          }
          <div className="height">
            <p>Height (cm):</p>
            <input type="text" 
                    value={state.height}
                    onChange={(e)=>dispatch({type:'UPDATE_HEIGHT',payload:e.target.value})}
            />
          </div>

          <div className="weight">
            <p>Weight (kg):</p>
            <input type="text" 
                    value={state.weight}
                    onChange={(e)=>dispatch({type:'UPDATE_WEIGHT',payload:e.target.value})}
            />
          </div>

          <div className="buttons">
            <button className="calculate" onClick={()=>dispatch({type:'CALCULATE'})}>Calculate BMI</button>
            <button className="clear"
              onClick={()=>dispatch({type:"CLEAR"})}
            >
              Clear
            </button>
          </div>

         {
          state.bmi &&

          <div className="result">
            <p>Your BMI is : {state.bmi}</p>
            <p>Status : {state.status}</p>
          </div>
    
         }
        </div>
      </div>
    </div>
  )
}

export default BMICalculator