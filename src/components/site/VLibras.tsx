import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
    __vlibrasMounted?: boolean;
  }
}

/**
 * VLibras — widget oficial do Governo Federal.
 * Injetamos o markup diretamente no <body> (fora da árvore React) para
 * evitar que a hidratação/reconciliação interfira com as mutações que o
 * script do VLibras faz no DOM do próprio widget.
 */
export function VLibras() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__vlibrasMounted) return;
    window.__vlibrasMounted = true;

    // Cria o container fora do React
    const root = document.createElement("div");
    root.setAttribute("vw", "");
    root.className = "enabled";
    root.style.cssText =
      "position:fixed;right:16px;bottom:16px;z-index:2147483000";
    root.innerHTML = `
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    `;
    document.body.appendChild(root);

    let cancelled = false;
    const init = () => {
      if (cancelled) return;
      if (window.VLibras) {
        try {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        } catch {
          /* já inicializado */
        }
        return;
      }
      setTimeout(init, 300);
    };
    init();

    return () => {
      cancelled = true;
      // Mantemos o widget montado entre navegações client-side.
    };
  }, []);

  return null;
}
