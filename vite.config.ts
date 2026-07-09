import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const vlibrasSnippet = `
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script>
      (function () {
        function initVLibras() {
          if (typeof window !== "undefined" && window.VLibras) {
            new window.VLibras.Widget("https://vlibras.gov.br/app");
          } else {
            setTimeout(initVLibras, 300);
          }
        }
        if (document.readyState === "complete") {
          initVLibras();
        } else {
          window.addEventListener("load", initVLibras);
        }
      })();
    </script>
  </body>`;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: [
    {
      name: "vlibras-inject",
      transformIndexHtml(html: string) {
        return html.replace("</body>", vlibrasSnippet);
      },
    },
  ],
});
