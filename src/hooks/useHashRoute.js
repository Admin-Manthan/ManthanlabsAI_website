import { useState, useEffect, useCallback } from "react";

const VALID_VIEWS = ["home", "products", "reelcut", "consultancy"];
const ANCHOR_MAP = {
  demo: "products",
  waitlist: "reelcut",
};

export function useHashRoute() {
  const parseHash = useCallback(() => {
    const rawHash = (window.location.hash || "#home").replace(/^#/, "");
    const view = VALID_VIEWS.includes(rawHash)
      ? rawHash
      : ANCHOR_MAP[rawHash] || "home";
    const anchor = ANCHOR_MAP[rawHash] ? rawHash : null;
    return { view, anchor, raw: rawHash };
  }, []);

  const [routeState, setRouteState] = useState(parseHash);

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash();
      setRouteState(parsed);

      if (parsed.anchor) {
        // Allow DOM to settle before scrolling
        requestAnimationFrame(() => {
          const el = document.getElementById(parsed.anchor);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial run for anchor scroll if starting on #demo or #waitlist
    if (routeState.anchor) {
      requestAnimationFrame(() => {
        const el = document.getElementById(routeState.anchor);
        if (el) el.scrollIntoView();
      });
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [parseHash, routeState.anchor]);

  const navigate = useCallback((hash) => {
    window.location.hash = hash.startsWith("#") ? hash : `#${hash}`;
  }, []);

  return {
    currentView: routeState.view,
    currentAnchor: routeState.anchor,
    navigate,
  };
}
