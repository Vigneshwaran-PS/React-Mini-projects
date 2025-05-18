import React, { useState } from 'react'
import './Calender.css'

import left_arrow from '../assets/left-arrow.svg'
import right_arrow from '../assets/right-arrow.svg'


const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]


const Calender = () => {

  const [selectedDate,setSelectedDate] = useState(new Date())

  const daysInMonth = () => {

    console.log("Selected Date - {} ", selectedDate)

    let daysArray = []

    const firstDay = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1)
    console.log(firstDay)
    
    const lastDay = new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,0)
    console.log(lastDay)


    for(let i=0;i<firstDay.getDay();i++){
      daysArray.push(null)
    }

    for(let i=1; i<=lastDay.getDate();i++){
      daysArray.push(new Date(selectedDate.getFullYear(),selectedDate.getMonth(),i))
    }

    return daysArray;
  }
  
  const handleMonthChange = (e) => {
      const newMonth = parseInt(e.target.value,10)
      setSelectedDate(new Date(selectedDate.getFullYear(),newMonth,1))
  }

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value,10)
    setSelectedDate(new Date(newYear,selectedDate.getMonth(),1))
  }


  const isSameDay = (date1,date2) => {
    return date1.getDate() === date2.getDate() 
              && date1.getMonth() === date2.getMonth()
              && date1.getFullYear() === date2.getFullYear()
  }

  return (
    <div className='calender-container'>
        <div className="calender-wrapper">
            <div className="cal-header">
                <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()-1,1))}>
                  <img src={left_arrow} alt="" />
                </button>
                <select name="" id="" value={selectedDate.getMonth()} onChange={handleMonthChange}>
                  {
                    months.map((month,index) => {                      
                        return <option value={index} key={index}>{month}</option>                      
                    })
                  }
                </select>
                <select value={selectedDate.getFullYear()} onChange={handleYearChange}>
                  {
                    Array.from({length:10},(_,i)=> selectedDate.getFullYear() - 5 + i)
                              .map(year => <option key={year} value={year}>{year}</option>)
                  }
                </select>
                <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,1))}>
                  <img src={right_arrow} alt="" />
                </button>
            </div>
            <div className="daysOfWeek">
              {
                daysOfWeek.map(day=>{
                    return <div>{day}</div>
                })
              }
            </div>

            <div className="days">
              {daysInMonth().map((day,index) => (
                  <div className={day? (isSameDay(day,new Date()) ? "day current" : "day") :"empty"} key={index}>{day?day.getDate():""}</div>
              ))}
            </div>
        </div>

    </div>
  )
}

export default Calender