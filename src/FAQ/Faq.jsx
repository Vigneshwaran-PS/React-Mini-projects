import  React, { useState } from 'react'
import './Faq.css'


const FaqItem = ({item}) => {

    const [showAns,setShowAns]= useState(true)
    return(
        <div className="faq-item">
            <div className="faq-que" onClick={() => setShowAns(prev => !prev)}>
                {item.que}
            </div>
            <div className={`faq-ans ${!showAns ? 'hidden' : ''}`}>
                {item.ans}
            </div>
        </div>
    )
}

const Faq   = () => {

    const faqs = [
        {
            id : 1,
            que : "What is React?",
            ans : "React is a java script library developed by Facebook which helps to build website user interfacs."
        },
        {
            id : 2,
            que : "What are the benifits of React?",
            ans : "Some of the benifits of react are: it is feasible, fast, scalable, modular, easy to debug and support server side rendering."
        },
        {
            id : 3,
            que : "What are the main concepts of React?",
            ans : "Some of the main concept of React are: components, props, state, hooks, lifecycle methods and JSX."
        }
    ]

  return (
    <div className='faq-container'>
        <div className='faq-wrapper'>
            <div className='faq-heading'>FAQs</div>

            <div className="faq-content">
                {
                    faqs.map(faq => 
                       ( <FaqItem key={faq.id} item = {faq}/>)
                    )
                }
            </div>
        </div>
    </div>
  )
}  

export default Faq