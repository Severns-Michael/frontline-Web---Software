import { AppRoutes } from './routes'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { useGa4 } from './lib/useGa4'
import './styles/global.css'

export default function App() {
  useGa4() // Your GA4 Measurement ID
  return (
    <>
    <a href="#main" className="skip">Skip to content</a>
      <Header />
      
        <AppRoutes />
      
      <Footer />
    </>
  )
}