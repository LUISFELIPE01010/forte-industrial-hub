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

    // Cria o container do VLibras diretamente no body
    const container = document.createElement("div");
    container.setAttribute("vw", "");
    container.className = "enabled";
    container.innerHTML = `
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    `;
    document.body.appendChild(container);

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
