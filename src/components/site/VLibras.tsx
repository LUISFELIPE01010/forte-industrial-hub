import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string | { rootPath: string }) => unknown;
    };
    __vlibrasMounted?: boolean;
  }
}

/**
 * VLibras — widget oficial do Governo Federal.
 * Injetamos o container fora da árvore React e damos estilo próprio
 * ao botão de acesso para garantir visibilidade em qualquer ambiente.
 * Ao clicar, o Widget do VLibras abre o tradutor em Libras.
 */
export function VLibras() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__vlibrasMounted) return;
    window.__vlibrasMounted = true;

    // Estilos próprios para o botão ficar visível mesmo antes/independente
    // do CSS do plugin oficial ser aplicado.
    const style = document.createElement("style");
    style.setAttribute("data-vlibras-custom", "");
    style.textContent = `
      [vw][data-rf-vlibras] {
        position: fixed !important;
        right: 16px !important;
        bottom: 16px !important;
        z-index: 2147483000 !important;
      }
      [vw][data-rf-vlibras] [vw-access-button] {
        display: flex !important;
        align-items: center;
        justify-content: center;
        width: 56px !important;
        height: 56px !important;
        border-radius: 9999px !important;
        background: #1351B4 !important;
        color: #fff;
        box-shadow: 0 6px 20px rgba(0,0,0,0.35);
        cursor: pointer;
        transition: transform .2s ease, background-color .2s ease;
      }
      [vw][data-rf-vlibras] [vw-access-button]:hover {
        background: #0C3B82 !important;
        transform: translateY(-2px);
      }
      [vw][data-rf-vlibras] [vw-access-button]::before {
        content: "";
        width: 30px;
        height: 30px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M12 2a2.5 2.5 0 0 1 2.5 2.5v1.2A6 6 0 0 1 18 11v2a1 1 0 1 1-2 0v-2a4 4 0 1 0-8 0v2a1 1 0 1 1-2 0v-2a6 6 0 0 1 3.5-5.3V4.5A2.5 2.5 0 0 1 12 2Zm-4 12a1 1 0 0 1 1 1v1a3 3 0 0 0 6 0v-1a1 1 0 1 1 2 0v1a5 5 0 0 1-4 4.9V22a1 1 0 1 1-2 0v-1.1A5 5 0 0 1 7 16v-1a1 1 0 0 1 1-1Z'/></svg>");
        background-size: contain;
        background-repeat: no-repeat;
      }
      [vw][data-rf-vlibras] [vw-access-button].active::before { display: none; }
      [vw][data-rf-vlibras] [vw-access-button] img,
      [vw][data-rf-vlibras] [vw-access-button] .vp-access-button { display: block; }
    `;
    document.head.appendChild(style);

    const root = document.createElement("div");
    root.setAttribute("vw", "");
    root.setAttribute("data-rf-vlibras", "");
    root.className = "enabled";
    root.innerHTML = `
      <div vw-access-button class="active" aria-label="Abrir tradutor de Libras"></div>
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
    };
  }, []);

  return null;
}
