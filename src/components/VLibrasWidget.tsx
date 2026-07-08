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

    if (ref.current) {
      ref.current.innerHTML = VLBRAS_HTML;
    }

    const existing = document.querySelector(
      "script[src='https://vlibras.gov.br/app/vlibras-plugin.js']"
    );

    const initWidget = () => {
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    };

    if (existing) {
      // Script já existe, só inicializa o widget
      initWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = false;
      script.onload = initWidget;
      document.body.appendChild(script);
    }
  }, []);

  return <div ref={ref} />;
}
