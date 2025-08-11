import React, { useState } from 'react'
import CounterDisplay from './CounterDisplay.jsx'
import CounterControls from './CounterControls.jsx'
import UncontrolledCounter from './UncontrolledCounter.jsx'

export default function App() {
  // Lifted state for two independent controlled counters
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  const [disableAll, setDisableAll] = useState(false)

  const resetAll = () => {
    setCountA(0)
    setCountB(0)
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Shared Counter Controller</h1>

      <section style={styles.panel}>
        <label style={styles.row}>
          <input
            type="checkbox"
            checked={disableAll}
            onChange={(e) => setDisableAll(e.target.checked)}
          />
          <span style={{ marginLeft: 8, fontWeight: 600 }}>
            Disable Buttons (from parent)
          </span>
        </label>
        <button onClick={resetAll} disabled={disableAll} style={styles.resetAll}>
          Reset Both Controlled Counters
        </button>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Controlled Counter A</h2>
          <CounterDisplay count={countA} label="Count A" />
          <CounterControls
            onIncrement={() => setCountA((c) => c + 1)}
            onDecrement={() => setCountA((c) => c - 1)}
            onReset={() => setCountA(0)}
            disabled={disableAll}
          />
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Controlled Counter B</h2>
          <CounterDisplay count={countB} label="Count B" />
          <CounterControls
            onIncrement={() => setCountB((c) => c + 1)}
            onDecrement={() => setCountB((c) => c - 1)}
            onReset={() => setCountB(0)}
            disabled={disableAll}
          />
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Uncontrolled Counter</h2>
          <p style={{ marginTop: 0, color: '#555' }}>
            This component manages its own state internally, but the parent can still
            disable its buttons via props.
          </p>
          <UncontrolledCounter disabled={disableAll} />
        </div>
      </section>

      <footer style={styles.footer}>
        <p>
          <strong>Demo Notes:</strong> The two controlled counters share the same parent state shape,
          but are independent. The uncontrolled counter keeps its own state internally.
        </p>
      </footer>
    </div>
  )
}

const styles = {
  page: {
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    maxWidth: 900,
    margin: '40px auto',
    padding: '0 16px'
  },
  title: { marginBottom: 16 },
  panel: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24
  },
  row: { display: 'flex', alignItems: 'center' },
  resetAll: {
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #ddd',
    background: '#f7f7f7',
    cursor: 'pointer'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 16
  },
  card: {
    border: '1px solid #e5e5e5',
    borderRadius: 12,
    padding: 16,
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    background: '#fff'
  },
  cardTitle: { marginTop: 0 },
  footer: { marginTop: 24, color: '#555' }
}
