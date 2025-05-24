import React, { useEffect, useReducer } from 'react'
import './QueAndAns.css'


function reducer(state,action){
    switch(action.type){
        default:
            return state
        case 'START_QUIZ':
            return { ...state, currentQuestion: state.currentQuestion + 1, timer: 10 };    
        case 'INCREASE_SCORE':
            return {...state,currentScore:state.currentScore+1}
        case 'JUMP_NEXT':
            if (state.currentQuestion < state.questions.length) {
                return { ...state, currentQuestion: state.currentQuestion + 1, timer: 10 };
            } else {
                return { ...state, currentQuestion: 0, showScore: true, timer: null };
            }
        case 'RESET':
            return { ...initialState }
        case 'SET_TIMER':
            return {...state,timer:10}
        case 'DECREASE_TIMER':
            return { ...state, timer: state.timer - 1 }
            
            
    }
}

const initialState = {
    currentScore: 0,
    totalScore: 3,
    currentQuestion: 0,
    timer : null,
    showScore : false,
    questions: [
        {
            id: 1,
            question: 'What is the largest planet in our solar system?',
            options: ['Earth', 'Saturn', 'Jupiter', 'Mars'],
            answer: 'Jupiter',
        },
        {
            id: 2,
            question: 'Who wrote the play "Romeo and Juliet"?',
            options: ['Charles Dickens', 'William Shakespeare', 'Leo Tolstoy', 'Mark Twain'],
            answer: 'William Shakespeare',
        },
        {
            id: 3,
            question: 'Which element has the chemical symbol "O"?',
            options: ['Gold', 'Oxygen', 'Osmium', 'Oxide'],
            answer: 'Oxygen',
        }
    ]

}

const QueAndAns = () => {

    const [state,dispatch] = useReducer(reducer,initialState)


    function startQuiz(){
        dispatch({type:"START_QUIZ"})
    }


    useEffect(()=> {

        console.log("Inside UseEffect")
        if (state.currentQuestion === 0 || state.showScore) return;

        const interval = setInterval(() => {
        if (state.timer > 0) {
            dispatch({ type: 'DECREASE_TIMER' });
        } else {
            dispatch({ type: 'JUMP_NEXT' }); 
            dispatch({ type: 'SET_TIMER' }); 
        }
    }, 1000);

        return ()=>clearInterval(interval)
    },[state.timer, state.currentQuestion, state.showScore])

  return (
    <div className='que-and-ans-container'>
        <div className='que-and-ans-wrapper'>
            
            {
                (state.currentQuestion == 0 && !state.showScore) &&
                    <>
                        <div className="header-container">
                            <p>Let's start the quiz</p>
                        </div>
                        <div className="quiz-start-button-container">
                            <button onClick={startQuiz}>Start Quiz</button>
                        </div>
                    </>
                
            }

            {
                state.currentQuestion > 0 && state.currentQuestion <= state.questions.length && (
                    <div className="question-and-answer-container">
                        <QuizContent 
                            currrentQuestion={state.questions[state.currentQuestion - 1]}
                            state={state}
                            dispatch={dispatch}
                        />
                    </div>
                )
            }


            {
                state.showScore && (
                    <div className="score-board">
                        <p className='score'>Your score is : {state.currentScore}/{state.questions.length}</p>
                        <button className="reset" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
                    </div>
                )
            }
        </div>
    </div>
  )
}


function QuizContent({currrentQuestion,state,dispatch}){

    function checkAns(ans){
        if(ans === currrentQuestion.answer){
            dispatch({type:"INCREASE_SCORE"})          
        } 
        
        dispatch({type:"JUMP_NEXT",payload : currrentQuestion.id})
    }
   

    return (
        <>
            <h2>Question {currrentQuestion.id}</h2>
            <p>{currrentQuestion.question}</p>
            <div className="options-container">
                {
                    currrentQuestion.options
                            .map((opt,index) => (
                                    <button key={index} onClick={() => checkAns(opt)}>{opt}</button>
                            ))
                    }
            </div>
            <p>Time Left: {state.timer}s</p>
        </>
    )
}

export default QueAndAns