import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/About.jsx" element={About} />
        <Route path="/" element={Home} />
        <Route path="/" element={Home} />
        <Route path="/" element={Home} />
        <Route path="/" element={Home} />
      </Routes>
    </BrowserRouter>
    
  )
}
