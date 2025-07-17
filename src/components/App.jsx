// Component: App

// Import React and components
// ...

// Import our components
import Tip from './Tip.jsx'

// Import stylesheets
import '../scss/app.scss'

function App() {
  return (
    <div id="app" className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
      <Tip />
    </div>
  )
}

export default App
