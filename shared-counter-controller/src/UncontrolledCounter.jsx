import React, { useState } from 'react'
import CounterDisplay from './CounterDisplay.jsx'
import CounterControls from './CounterControls.jsx'

// Keeps its own state internally (uncontrolled with respect to the parent).
export default function UncontrolledCounter({ disabled = false }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CounterDisplay count={count} label="Uncontrolled Count" />
      <CounterControls
        onIncrement={() => setCount((c) => c + 1)}
        onDecrement={() => setCount((c) => c - 1)}
        onReset={() => setCount(0)}
        disabled={disabled}
      />
    </div>
  )
}
