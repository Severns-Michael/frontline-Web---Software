import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Narrow but `any`-free type for gtag
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function useGa4(/* measurementId = 'G-XXXXXXXXXX' */) {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.('event', 'page_view', {
      page_location: typeof window !== 'undefined' ? window.location.href : undefined,
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);
}