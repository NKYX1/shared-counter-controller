# Shared Counter Controller (React)

This small React app demonstrates **state lifting**, **controlled vs. uncontrolled** components, and a parent-level
**Disable Buttons** feature.

## Features
- `CounterDisplay.jsx` shows the current count.
- `CounterControls.jsx` provides + / – / reset buttons.
- State for two counters is **lifted** to the parent (`App.jsx`) and passed down as props.
- A second controlled counter is added to show independent instances.
- `UncontrolledCounter.jsx` keeps its own internal `useState` to compare structures.
- **Bonus:** A parent "Disable Buttons" checkbox disables **all** controls.

## Getting Started
```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```
