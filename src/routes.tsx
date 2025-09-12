import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Portfolio from './pages/Portfolio/Portfolio'
import Faq from './pages/Faq/Faq'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'


export function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/FAQ" element={<Faq />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<NotFound />} />
</Routes>
)
}