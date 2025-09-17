import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const SCROLL_TARGETS = ["main", "[data-scroll]", ".scroll-container"];

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType(); // 'PUSH' | 'POP' | 'REPLACE'

  // Disable browser auto-restoring scroll between pages (no empty catch blocks)
  useLayoutEffect(() => {
    const hasHistory =
      typeof window !== "undefined" &&
      typeof window.history !== "undefined" &&
      "scrollRestoration" in window.history;

    let prev: History["scrollRestoration"] | undefined;

    if (hasHistory) {
      prev = window.history.scrollRestoration as History["scrollRestoration"];
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if (hasHistory && prev) {
        window.history.scrollRestoration = prev;
      }
    };
  }, []);

  useEffect(() => {
    // Allow native hash jumps
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ block: "start" });
      return;
    }

    // Preserve position on Back/Forward only
    if (navType === "POP") return;

    // Ensure render has happened before forcing top
    const restore = temporarilyDisableSmoothScroll();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Try a custom scroller first
        for (const sel of SCROLL_TARGETS) {
          const el = document.querySelector(sel);
          if (el instanceof HTMLElement && el.scrollHeight > el.clientHeight) {
            el.scrollTo({ top: 0, left: 0, behavior: "auto" });
            restore();
            return;
          }
        }
        // Fallback to window
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document.documentElement.scrollTop = 0;
        (document.scrollingElement || document.body).scrollTop = 0;
        restore();
      });
    });
  }, [pathname, hash, navType]);

  return null;
}

function temporarilyDisableSmoothScroll() {
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  return () => {
    root.style.scrollBehavior = prev;
  };
}