import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Portfolio from './pages/Portfolio/Portfolio'
import FAQ from './pages/FAQ/FAQ'
import Contact from './pages/Contact/Contact'


export function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/FAQ" element={<FAQ />} />
<Route path="/contact" element={<Contact />} />
</Routes>
)
}