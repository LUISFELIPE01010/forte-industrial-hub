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
  <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>
    (function() {
      if (typeof window !== 'undefined' && window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    })();
  </script>
`;

export function VLibrasWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Scripts injected via innerHTML do not execute; recreate them as DOM nodes.
    const scripts = ref.current.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      newScript.async = false;
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: VLBRAS_HTML }} />;
}
