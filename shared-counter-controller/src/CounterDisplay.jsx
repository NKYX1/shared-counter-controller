import React from 'react'
export default function CounterDisplay({ count, label = 'Count' }) {
  return (
    <div style={styles.wrap} aria-live="polite">
      <span style={styles.label}>{label}:</span>
      <output style={styles.value} data-testid="count-value">{count}</output>
    </div>
  )
}

const styles = {
  wrap: { display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 },
  label: { fontWeight: 600 },
  value: { fontVariantNumeric: 'tabular-nums', fontSize: 24 }
}
