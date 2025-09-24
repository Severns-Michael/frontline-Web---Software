import { AppRoutes } from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useGa4 } from './lib/useGa4';
import ScrollToTop from './components/scrollToTop';
import './styles/global.css';

export default function App() {
  const GA = import.meta.env.VITE_GA4_ID ?? 'G-W6SCBR27PW';
useGa4(GA);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <ScrollToTop/>
      <Header />
      <main id="main">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}