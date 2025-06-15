import React, { useEffect, useReducer } from 'react'
import './Pagination.css'
import axios from 'axios';


function reduce(state,action) {
    switch(action.type){
        case 'FETCh_DATA':
            return {...state,
                        data:action.payload, 
                        totalPages : Math.ceil(action.payload.length / state.size)
                    }
        case 'LAST_PAGE':
            return {...state,page:state.totalPages-1}
        case 'FIRST_PAGE':
            return {...state,page:0}
        case 'PREVIOUS':
            return {...state,page:state.page - 1}
        case 'NEXT':
            return {...state,page:state.page+1}
        case 'PAGE':
            return {...state,page: action.payload}
        default:
            return state;
    }
}

const initialState = {
    size : 10,
    page : 0,
    data : [],
    totalPages : 0,
    loading : false
}

const Pagination = () => {

    const [state,dispatch] = useReducer(reduce,initialState)

    useEffect(()=>{
        

        const fetchData = async() => {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)    
            let responseData =  response.data
            dispatch({type:'FETCh_DATA',payload:responseData})
        }

        fetchData()

        console.log(state)
    },[])

    function determinePages(){
        let pageList = []
        
        for(let i = 1; i <= state.totalPages; i++){
            pageList.push(i)
        }     
        
        return pageList;
    }

    function getData(){
        let data =  state.data.slice(
            state.page * state.size,
            (state.page + 1) * state.size)

        return data;
    }


    function lastPage(){
        dispatch({type:'LAST_PAGE'})
    }

    function firstPage(){
        dispatch({type:'FIRST_PAGE'})
    }


    function nextPage(){
        if(state.page < state.totalPages - 1){
            dispatch({type:'NEXT'})
        }
    }

    function previousPage(){
        if(state.page > 0){
            dispatch({type:'PREVIOUS'})
        }
    }

    function pageByPageNumber(no){
        dispatch({type:'PAGE', payload:no})
    }

  return (
    <div className='page-container'>
        <h2>Pagination</h2>
        <div className="page-wrapper">
            <div className="pages">
                {
                    state.data.length > 0 &&
                    getData().map((data,index) => (
                        <div className="content" key={index}>
                            <div className="id">{data.id}</div>
                            <div className="title">{data.title}</div>
                        </div>
                    ))
                }
            </div>
            <div className="buttons">
                <button className='first' onClick={firstPage}>First</button>
                <button className='previous' onClick={previousPage}>Previous</button>
                {
                    state.totalPages > 0 && 
                
                    determinePages().map((p,index) => (
                        <button
                            className={`page ${state.page === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => pageByPageNumber(index)}
                        >
  {p}
</button>

                    ))   
                
                }
                <button className='next' onClick={nextPage}>Next</button>
                <button className='last' onClick={lastPage}>Last</button>
            </div>
        </div>
    </div>
  )
}

export default Pagination