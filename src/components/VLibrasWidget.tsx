import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (baseUrl: string) => void;
    };
  }
}

const VLBRAS_HTML = `
  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
`;

export function VLibrasWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!ref.current || initialized.current) return;
    initialized.current = true;

    const existing = document.querySelector("script[src='https://vlibras.gov.br/app/vlibras-plugin.js']");
    if (existing) return;

    // Render VLibras markup
    ref.current.innerHTML = VLBRAS_HTML;

    // Load plugin script as a real DOM script so it executes
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = false;
    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
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
      <div ref={ref} />
    </>
  );
}
