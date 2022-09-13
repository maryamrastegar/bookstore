import React from 'react'

function Price({amount}) {
  return (
    <div className='d-flex flex-row align-items-center'>
        <small className="unit-price mx-1 text-dark">$</small>
        <span className="price">{amount}</span>
        
    </div>
  )
}

export default Price