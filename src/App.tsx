import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState();

  return (
    <>
      <h1>Select Your Theme</h1>
      <div className="card">
        <button onClick={() => setTheme(theme)}>
          What's your vibe today?
        </button>
      </div>
    </>
  )
}

export default App
