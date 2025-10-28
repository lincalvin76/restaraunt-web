import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { GlobalCart } from "./Cart.jsx"
import CartPopup from "./CartPopup.jsx"

import { Home } from './pages/Home.jsx'
import { Menu } from './pages/Menu.jsx'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Image } from './pages/Images.jsx'
import { Schedule } from './pages/Schedule.jsx'

function App() {
  return (
    <GlobalCart>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/images" element={<Image/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
        </Routes>

        <CartPopup />
      </Router>
    </GlobalCart>
  )
}

export default App
