import React from 'react'

const Counter = ({ onIncrement, onDecrement, value }) => (
  <div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement} disabled={value <== 0}>-</button>
    <div>Count: {value}</div>
  </div>
)

export default Counter
