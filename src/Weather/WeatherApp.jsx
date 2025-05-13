import React, { useEffect, useState } from 'react'
import './WeatherApp.css'

import searchIcon from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/search.png'
import clearIcon from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/sun.png'
import humidityIcon from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/weather.png'
import windIcon from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/wind.png'
import drizzleIcon from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/drizzle.png'
import rainIcon from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/rain.png'
import snowIcon from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/snow.png'
import cloudIcon from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/cloudy.png'

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const WeatherDetails = ({icon,temp,city,country,lat,lon,humidity,wind}) => {
    return(
        <>
            <div className="image">
                <img src={icon} alt="" />
            </div>

            <div className="temp">{temp}°C</div>
            <div className="city">{city}</div>
            <div className="country">{country}</div>
            <div className="cord">
                <div>
                    <span className="lat">latitude</span>
                    <span>{lat}</span>
                </div>
                <div>
                    <span className="lon">latitude</span>
                    <span>{lon}</span>
                </div>
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={humidityIcon} alt="" className='icon'/>
                    <div className="data">
                        <div className="humiditiy-per">{humidity}%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={windIcon} alt="" className='icon'/>
                    <div className="data">
                        <div className="wind-speed">{wind}km/h</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const WeatherApp = () => {

    const [weather,setWeather] = useState({
        searchText: 'Chennai',
        icon : clearIcon,
        temp : 24,
        city : 'Madurai',
        country: 'IN',
        lat : 0,
        lon : 0,
        humidity: 0,
        wind : 0,
        loading : false,
        cityNotFound : false
    })

    const weatherIconMap = {
        "01d": clearIcon,
        "01n": clearIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": drizzleIcon,
        "03n": drizzleIcon,
        "04d": drizzleIcon,
        "04n": drizzleIcon,
        "09d": rainIcon,
        "09n": rainIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "13d": snowIcon,
        "13n": snowIcon
      }
      
    
    let key = "e7ca168ca0779a98389e4a7418bbbf5f"
    const search = async () => {
        setWeather(prev=>({...prev,loading:true,cityNotFound:false}))

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${weather.searchText}&appid=${key}`

        setTimeout(async() => {
            try{
                let res = await fetch(url)
                let resJson = await res.json()
                console.log(resJson)
    
                if(resJson.cod === '404'){
                    setWeather(prev=>({...prev,cityNotFound:true,loading:false}))
                    return
                }
    
                setWeather(prev=>{
                    let data = {...prev}
                    data.humidity = resJson.main.humidity
                    data.wind = resJson.wind.speed
                    data.temp = Math.floor(resJson.main.temp)
                    data.city = resJson.name
                    data.country = resJson.sys.country
                    data.lat = resJson.coord.lat
                    data.lon = resJson.coord.lon
                    data.icon = weatherIconMap[resJson.weather[0].icon] || clearIcon
                    return data
                })
            }catch(e){
                
            }finally{
                setWeather(prev=>({...prev,loading:false}))
            }
        },2000)
        
    }

    const handleOnKeyDown = (e) => {
        if(e.key === 'Enter'){
            search()
        }
    }


    useEffect(()=> {
        search()
    },[])

  return (
    <div className='weather-container'>
        <h1>WeatherApp</h1>
        <div className="weather-wrapper">
            <div className="weather-content">
                <div className="input-container">
                    <input type="text" 
                            className='search-city'
                            placeholder='Search city'
                            value={weather.searchText}
                            onChange={(e)=>setWeather({...weather,searchText:e.target.value})}
                            onKeyDown={handleOnKeyDown}
                    />
                    <div className="search-icon" onClick={()=>search()}>
                        <img src={searchIcon} alt="" width="40px" height='40px'/>
                    </div>
                </div>

                {
                    !weather.loading &&
                    !weather.cityNotFound &&
                    <div className="weather-detail-container">
                        <WeatherDetails 
                            icon={weather.icon} 
                            temp={weather.temp}
                            city={weather.city}
                            country={weather.country}
                            lat={weather.lat}
                            lon={weather.lon}
                            humidity={weather.humidity}
                            wind={weather.wind}
                        />
                    </div>  
                }

                {
                    weather.loading && 
                    <p className='loading'>Loading...</p>
                }

                {
                    weather.cityNotFound &&
                    <p className='not-found'>City Not Found</p>
                }
            </div>
        </div>
    </div>
  )
}

export default WeatherApp