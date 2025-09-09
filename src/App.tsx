import { AppRoutes } from './routes'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './styles/global.css'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}