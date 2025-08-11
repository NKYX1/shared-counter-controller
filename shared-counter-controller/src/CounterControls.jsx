import React from 'react'

export default function CounterControls({
  onIncrement,
  onDecrement,
  onReset,
  disabled = false
}) {
  return (
    <div style={styles.row}>
      <button onClick={onDecrement} disabled={disabled} style={styles.btn} aria-label="decrement">–</button>
      <button onClick={onReset} disabled={disabled} style={styles.btn} aria-label="reset">reset</button>
      <button onClick={onIncrement} disabled={disabled} style={styles.btn} aria-label="increment">+</button>
    </div>
  )
}

const styles = {
  row: { display: 'flex', gap: 8 },
  btn: {
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #ddd',
    background: '#fafafa',
    cursor: 'pointer'
  }
}
