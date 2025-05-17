import React, { useReducer } from 'react'
import './StrongPassGenerator.css'


function reduce(state,action){
    switch(action.type){
        default:
            return state;
        case 'UPDATE_PASS_LENGTH':
            const val = action.payload
            if(/^\d*$/.test(val)){
                return {...state,passLength:action.payload,error:false}
            }
            return state
        case 'UPDATE_ERROR':
            return {...state,error:action.payload}
        case 'CHECKBOX_UPDATE':
            const name = action.payload.target.name
            let stateName = ''
            if(name === 'U'){
                stateName = 'upperCase'
            }
            if(name === 'L'){
                stateName = 'lowerCase'
            }
            if(name === 'S'){
                stateName = 'symbol'
            }
            if(name === 'N'){
                stateName = 'numberic'
            }
            return { ...state, [stateName]: !state[stateName] , optionError:false};
        case 'UPDATE_RESULT':
            return { ...state, result: action.payload, error: false };
        case 'UPDATE_OPTION_ERROR':
            return { ...state, optionError: action.payload};
    }
}

const initialState = {
    passLength : 0,
    upperCase : true,
    lowerCase : true,
    symbol : true,
    numberic : true,
    result : null,
    error : false,
    optionError : false
}

const StrongPassGenerator = () => {

    const [state,dispatch] = useReducer(reduce,initialState);

    const generatePassWord = () => {

        const uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lCase = 'abcdefghijklmnopqrstuvwxyz'
        const sym ='!@#$^&*+'
        const num = '1234567890'

        if(state.passLength == 0 || state.passLength <= 5){
            dispatch({type:'UPDATE_ERROR',payload:true})
            return
        }

        if(!state.upperCase && !state.lowerCase && !state.symbol && !state. numberic){
            dispatch({type:'UPDATE_OPTION_ERROR',payload:true})
            return
        }
        
        let allChars = '';

        if(state.upperCase) allChars += uCase;
        if(state.lowerCase) allChars += lCase;
        if(state.symbol) allChars += sym;
        if(state.numberic) allChars += num;

        let password = '';
        for(let i = 0; i < state.passLength; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        dispatch({ type: 'UPDATE_RESULT', payload: password });

    }

    const copy = () => {
        window.navigator.clipboard.writeText(state.result)
    }

  return (
    <div className='pass-container'>
        <div className="pass-wrapper">
            <div className="pass-header">
                <h2>Strong Password Generators</h2>
            </div>
            <div className="pass-content">
                <div className="pass-length">
                    <h4>Password length:</h4>
                    <input type="text" 
                            className='pass-length-input'
                            value={state.passLength}
                            onChange={(e)=>dispatch({type:'UPDATE_PASS_LENGTH',payload:e.target.value})}        
                    />
                    {state.error && <p>password length must be greater than five. </p>}
                    {state.optionError && <p>Atleast select one password type below. </p>}
                </div>

                <div className="choose-strength">
                    <div className="uppercase">
                        <input type="checkbox" 
                                checked={state.upperCase}
                                onChange={(e)=>dispatch({type:'CHECKBOX_UPDATE',payload:e})}
                                name='U'
                        />
                        <div>Input Uppercase</div>
                    </div>

                    <div className="lowercase">
                        <input type="checkbox" 
                                checked={state.lowerCase}
                                onChange={(e)=>dispatch({type:'CHECKBOX_UPDATE', payload: e})}
                                name="L"
                        />
                        <div>Input Lowercase</div>
                    </div>

                    <div className="numberic">
                        <input type="checkbox" 
                                checked={state.numberic}
                                onChange={(e)=>dispatch({type:'CHECKBOX_UPDATE', payload: e})}
                                name="N"
                        />
                        <div>Input Numbers</div>
                    </div>

                    <div className="symbol">
                        <input type="checkbox" 
                                checked={state.symbol}
                                onChange={(e)=>dispatch({type:'CHECKBOX_UPDATE', payload: e})}
                                name="S"
                        />
                        <div>Input Symbols</div>
                    </div>
                </div>

                <div className="pass-buttons">
                    <button onClick={()=>generatePassWord()}>Generate Password</button>
                </div>

                <div className="pass-copy">
                    <input type="text" readOnly 
                            value={state.result || ''}
                    />
                    <button onClick={copy}>copy</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StrongPassGenerator