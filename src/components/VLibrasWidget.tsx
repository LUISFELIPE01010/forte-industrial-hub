import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (baseUrl: string) => void;
    };
    __vlibrasInitialized?: boolean;
  }
}

export function VLibrasWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Ensure the required markup exists in the DOM (VLibras looks for [vw]).
    if (!document.querySelector("[vw]")) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML =
        '<div vw class="enabled">' +
        '<div vw-access-button class="active"></div>' +
        '<div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>' +
        "</div>";
      const el = wrapper.firstElementChild;
      if (el) document.body.appendChild(el);
    }

    let cancelled = false;
    const tryInit = () => {
      if (cancelled) return;
      if (window.__vlibrasInitialized) return;
      if (window.VLibras) {
        try {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
          window.__vlibrasInitialized = true;
        } catch (e) {
          console.error("VLibras init failed", e);
        }
        return;
      }
      setTimeout(tryInit, 300);
    };
    tryInit();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <style>{`
      [vw], [vw-access-button], [vw-plugin-wrapper] { display: block !important; }
      [vw-access-button] {
        position: fixed !important;
        right: 16px !important;
        bottom: 16px !important;
        z-index: 2147483647 !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      @media (max-width: 768px) {
        [vw-access-button] { right: 12px !important; bottom: 12px !important; }
      }
    `}</style>
  );
}
