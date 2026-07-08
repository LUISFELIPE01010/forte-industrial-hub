import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (baseUrl: string) => void;
    };
  }
}

export function VLibrasWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initWidget = () => {
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    };

    const existing = document.querySelector(
      "script[src='https://vlibras.gov.br/app/vlibras-plugin.js']"
    );

    if (existing) {
      initWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = false;
      script.onload = initWidget;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
