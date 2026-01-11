import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import FloatingSocials from './components/FloatingSocials'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop' // Helper for scroll reset

function App() {
  return (
    <Router>
      <div className="App">
        {/* Helper to scroll to top on route change */}
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <FloatingSocials />
      </div>
    </Router>
  )
}

export default App
