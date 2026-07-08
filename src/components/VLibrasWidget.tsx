import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (baseUrl: string) => void;
    };
    __vlibrasInitialized?: boolean;
  }
}

const SCRIPT_SRC = "https://vlibras.gov.br/app/vlibras-plugin.js";
const BASE_URL = "https://vlibras.gov.br/app";

function ensureMarkup() {
  if (document.querySelector("[vw]")) return;
  const container = document.createElement("div");
  container.innerHTML = `
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  `.trim();
  document.body.appendChild(container.firstElementChild as Node);
}

function initWidget() {
  if (window.__vlibrasInitialized) return;
  if (!window.VLibras) return;
  try {
    new window.VLibras.Widget(BASE_URL);
    window.__vlibrasInitialized = true;
  } catch (e) {
    console.error("VLibras init failed", e);
  }
}

export function VLibrasWidget() {
  useEffect(() => {
    ensureMarkup();

    if (window.VLibras) {
      initWidget();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src='${SCRIPT_SRC}']`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    const onLoad = () => initWidget();
    script.addEventListener("load", onLoad);
    return () => script?.removeEventListener("load", onLoad);
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
