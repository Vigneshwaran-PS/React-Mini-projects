import React, { useState } from 'react'
import './CountryInfo.css'

const CountryInfo = () => {

  const [res, setRes] = useState(null)

  function handleOnchange(e) {
    const selectedCountry = e.target.value;

    let population = "";
    let language = "";
    let literacy = "";

    switch (selectedCountry) {
      case "India":
        population = "over 1.4 billion";
        language = "Hindi and English";
        literacy = "77.7%";
        break;
      case "USA":
        population = "around 333 million";
        language = "English";
        literacy = "99%";
        break;
      case "Russia":
        population = "about 143 million";
        language = "Russian";
        literacy = "99.7%";
        break;
      case "China":
        population = "over 1.4 billion";
        language = "Mandarin Chinese";
        literacy = "96.8%";
        break;
      case "Brazil":
        population = "around 214 million";
        language = "Portuguese";
        literacy = "93.2%";
        break;
      default:
        setRes(null);
        return;
    }

    const sentence = `${selectedCountry} has a population of ${population}, the official language is ${language}, and the literacy rate is approximately ${literacy}.`;
    setRes(sentence);
  }

  return (
    <div className='country-wrapper'> 
      
      <h3>Country Info</h3>

      <h5>Select a country to know the info..</h5>
      <div className="options">
        <select onChange={handleOnchange} defaultValue="">
          <option value="" disabled>Select a country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
        </select>
      </div>

      <div className="outer-res">
        {
          res &&
          <div className="res">
            {res}
          </div>
        }
      </div>
      
    </div>
  )
}

export default CountryInfo
