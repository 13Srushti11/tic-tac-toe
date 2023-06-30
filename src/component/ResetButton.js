import React from 'react'
import "./ResetButton.css"


const ResetButton = ({resetBoard}) => {
  return (
   
      <button className='btn' onClick={resetBoard}>Reset</button>
   
  )
}

export default ResetButton
