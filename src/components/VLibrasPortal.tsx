import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (baseUrl: string) => void;
    };
  }
}

export function VLibrasPortal() {
  useEffect(() => {
    // Aguarda hydration completa
    const timer = setTimeout(() => {
      if (document.querySelector("[vw]")) return;

      const container = document.createElement("div");
      container.setAttribute("vw", "");
      container.className = "enabled";
      container.innerHTML =
        '<div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>';
      document.body.appendChild(container);

      const script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.onload = () => {
        if (window.VLibras) {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      };
      document.body.appendChild(script);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}