import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
  }
}

/**
 * VLibras — widget oficial do Governo Federal.
 * O script é carregado via head() em __root.tsx.
 */
export function VLibras() {
  useEffect(() => {
    if (typeof window === "undefined") return;

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
    };
  }, []);

  const attrs = (a: Record<string, string>) => a;
  return (
    <div {...attrs({ vw: "true" })} className="enabled">
      <div {...attrs({ "vw-access-button": "true" })} className="active" />
      <div {...attrs({ "vw-plugin-wrapper": "true" })}>
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}
