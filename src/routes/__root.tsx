import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rocha Forte Serviços | Andaimes, Pintura Industrial e Caldeiraria — Cubatão/SP" },
      {
        name: "description",
        content:
          "Empresa especializada em andaimes, pintura técnica industrial e caldeiraria. Atendemos indústrias em todo o Brasil. Fale com a Rocha Forte.",
      },
      { name: "author", content: "Rocha Forte Serviços Ltda" },
      { name: "theme-color", content: "#1A1A1A" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Rocha Forte Serviços" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Rocha Forte Serviços | Andaimes, Pintura Industrial e Caldeiraria — Cubatão/SP" },
      { name: "twitter:title", content: "Rocha Forte Serviços | Andaimes, Pintura Industrial e Caldeiraria — Cubatão/SP" },
      { name: "description", content: "Rocha Forte Identity is a professional B2B industrial services website." },
      { property: "og:description", content: "Rocha Forte Identity is a professional B2B industrial services website." },
      { name: "twitter:description", content: "Rocha Forte Identity is a professional B2B industrial services website." },
      { property: "og:image", content: "https://forte-industrial-hub.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://forte-industrial-hub.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow:wght@500;700;800;900&family=Montserrat:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function VLibrasLoader() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    let initialized = false;

    const ensureWidget = () => {
      let widget = document.querySelector<HTMLElement>("[vw]");

      if (!widget) {
        widget = document.createElement("div");
        widget.setAttribute("vw", "");
        document.body.appendChild(widget);
      }

      widget.className = "enabled";
      widget.style.setProperty("position", "fixed", "important");
      widget.style.setProperty("top", "50%", "important");
      widget.style.setProperty("right", "16px", "important");
      widget.style.setProperty("bottom", "auto", "important");
      widget.style.setProperty("left", "auto", "important");
      widget.style.setProperty("transform", "translateY(-50%)", "important");
      widget.style.setProperty("display", "block", "important");
      widget.style.setProperty("visibility", "visible", "important");
      widget.style.setProperty("opacity", "1", "important");
      widget.style.setProperty("pointer-events", "auto", "important");
      widget.style.setProperty("z-index", "2147483647", "important");

      if (!widget.querySelector("[vw-access-button]")) {
        widget.innerHTML = `<div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>`;
      }
    };

    ensureWidget();

    const initializeVLibras = () => {
      ensureWidget();

      if (initialized) return;

      try {
        const vlibras = (window as typeof window & {
          VLibras?: {
            Widget: new (
              options: { rootPath: string; position: "BL" | "BR" | "TL" | "TR"; opacity: number } | string,
            ) => unknown;
          };
        }).VLibras;

        if (vlibras?.Widget) {
          initialized = true;
          const previousOnload = window.onload;

          new vlibras.Widget({
            rootPath: "https://vlibras.gov.br/app",
            position: "BR",
            opacity: 1,
          });

          const finishInitialization = () => {
            const officialOnload = window.onload;

            if (typeof officialOnload === "function" && officialOnload !== previousOnload) {
              officialOnload.call(window, new Event("load"));

              if (document.readyState === "complete") {
                window.onload = previousOnload;
              }
            }

            requestAnimationFrame(ensureWidget);
          };

          if (document.readyState === "complete") {
            finishInitialization();
          } else {
            window.addEventListener("load", () => requestAnimationFrame(ensureWidget), {
              once: true,
            });
          }
        }
      } catch (e) {
        console.error("VLibras init failed", e);
      }
    };

    const existingScript = document.getElementById("vlibras-script") as HTMLScriptElement | null;

    if (existingScript) {
      initializeVLibras();
      existingScript.addEventListener("load", initializeVLibras, { once: true });
    } else {
      const script = document.createElement("script");
      script.id = "vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.onload = initializeVLibras;
      document.body.appendChild(script);
    }

    const observer = new MutationObserver(ensureWidget);
    observer.observe(document.body, { childList: true, subtree: false });

    window.addEventListener("click", ensureWidget, true);
    window.addEventListener("popstate", ensureWidget);

    return () => {
      observer.disconnect();
      window.removeEventListener("click", ensureWidget, true);
      window.removeEventListener("popstate", ensureWidget);
    };
  }, []);

  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <VLibrasLoader />
    </QueryClientProvider>
  );
}

