import React, { useEffect, useRef } from 'react'

const Example = () => {
  const countRef = useRef(0)           // for count state (doesn't trigger re-render)
  const headingRef = useRef(null)  
  
  useEffect(() => {
    console.log("UI rendered")
  }, [])

  const handleClick = () => {
    countRef.current++
    if (headingRef.current) {
      headingRef.current.innerHTML = `Count : ${countRef.current}`
    }
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      <h1 ref={headingRef}>Count : 0</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Example
