// useGa4.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Gtag = (...args: unknown[]) => void;
declare global { interface Window { gtag?: Gtag } }

export function useGa4(measurementId: string) {
  const { pathname, search } = useLocation();
  useEffect(() => {
    if (!window.gtag) return; // GA not loaded yet
    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: pathname + search,
      page_title: document.title,
      send_to: measurementId,
    });
  }, [measurementId, pathname, search]);
}