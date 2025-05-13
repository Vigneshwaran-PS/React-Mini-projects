import React, { useState } from 'react'
import './GetAdvice.css'

const GetAdvice = () => {

    const [advice,setAdvice] = useState({
        count : 0,
        adv : 'Please click Button to get Advice',
        loading : false
    })

    const getAdvice = async () => {
        try {
            setAdvice(prev => ({ ...prev, loading: true }));
    
            const res = await fetch(`https://api.adviceslip.com/advice`);
    
            if (res.status === 200) {
                const resJson = await res.json();
                setAdvice(prev => ({
                    ...prev,
                    adv: resJson.slip.advice,
                    count: prev.count + 1  // increment count here
                }));
            }
        } catch (e) {
            console.error("Error fetching advice:", e);
        } finally {
            setAdvice(prev => ({ ...prev, loading: false }));
        }
    }
    

  return (
    <div className='advice-container'>
        <div className="advice-wrapper">
            <h1>Get a Advice</h1>

            <div className="advice">
                <h4>{advice.adv}</h4>

                <button onClick={() => getAdvice()} disabled={advice.loading}>Get Advice</button>

                <p>You have read {advice.count} pieces of advice</p>
            </div>
        </div>
    </div>
  )
}

export default GetAdvice