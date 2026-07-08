(function () {
  if (window.__vlibrasStaticLoader) return;
  window.__vlibrasStaticLoader = true;

  function startVLibras() {
    window.setTimeout(function () {
      if (!document.body || document.querySelector('[vw]')) return;

      var container = document.createElement('div');
      container.setAttribute('vw', '');
      container.className = 'enabled';
      container.innerHTML = '<div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>';
      document.body.appendChild(container);

      function initWidget() {
        if (window.VLibras && window.VLibras.Widget) {
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        }
      }

      var existingScript = document.querySelector('script[src="https://vlibras.gov.br/app/vlibras-plugin.js"]');
      if (existingScript) {
        existingScript.addEventListener('load', initWidget, { once: true });
        initWidget();
        return;
      }

      var script = document.createElement('script');
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.onload = initWidget;
      document.body.appendChild(script);
    }, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startVLibras, { once: true });
  } else {
    startVLibras();
  }
})();