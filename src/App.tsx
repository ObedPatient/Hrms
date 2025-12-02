import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './route/index'

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App