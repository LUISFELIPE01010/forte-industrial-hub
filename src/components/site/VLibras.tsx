import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
  }
}

/**
 * VLibras — widget oficial do Governo Federal que traduz
 * conteúdo em português para Libras (Língua Brasileira de Sinais).
 * https://www.gov.br/governodigital/pt-br/vlibras
 */
export function VLibras() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("vlibras-script")) return;

    const script = document.createElement("script");
    script.id = "vlibras-script";
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    // @ts-expect-error - VLibras custom attributes
    <div vw="true" className="enabled">
      {/* @ts-expect-error - VLibras custom attributes */}
      <div vw-access-button="true" className="active" />
      {/* @ts-expect-error - VLibras custom attributes */}
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}
