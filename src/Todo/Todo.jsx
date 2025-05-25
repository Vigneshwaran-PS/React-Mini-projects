import React, { useReducer } from 'react'
import './Todo.css'
import { toFormData } from 'axios';


const initialState = {
    newTodo : '',
    todos : []
}

function reduce(state,action){
    switch(action.type){
        default:
            return state;
        case 'HADLE_INPUT':
            return {...state,newTodo : action.payload}
        case 'ADD_TASK':
            if (!state.newTodo?.trim()) {
                return state;
            }
            const newTask = {
                id: Math.floor(Math.random() * 1000),
                name: state.newTodo.trim()
            };
            return {
                ...state,
                todos: [...state.todos,newTask],
                newTodo : ''
            }
        case 'REMOVE_TASK':
            let newTodos = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos : [...newTodos]
            }
    }
}

const Todo = () => {

    const [state,dispatch] = useReducer(reduce,initialState)

    function addTask(e){
        dispatch({type:'ADD_TASK'})     
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
          dispatch({ type: 'ADD_TASK' });
        }
      }

    function removeTask(id){
        dispatch({type:'REMOVE_TASK',payload:id})
    }

  return (
    <div className='todo-container'>
        <div className="todo-wrapper">
            <h3 className='todo-header'>Todo</h3>

            <div className="add-todo">
                <input type="text" 
                        placeholder='Enter you tasks...'
                        onChange={(e)=>dispatch({type:'HADLE_INPUT',payload:e.target.value})}
                        value={state.newTodo}
                        onKeyDown={handleKeyDown}
                />
                <button className='add-task' onClick={addTask}>Add Task</button>
            </div>

            {
                state.todos.length > 0  && (
                    <div className="todos">
                    {
                        state && state.todos.map(todo => 
                        (
                            <div className="todo" key={todo.id}>
                                <p>{todo.name}</p>
                                <button onClick={() => removeTask(todo.id)}>Done</button>
                            </div>
                        )
                        )
                    }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Todo