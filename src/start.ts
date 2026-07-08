import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

async function injectStaticVlibrasLoader(response: Response): Promise<Response> {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  const html = await response.clone().text();
  if (html.includes("/vlibras-loader.js")) return response;

  const loaderScript = '<script src="/vlibras-loader.js" defer></script>';
  const bodyCloseIndex = html.lastIndexOf("</body>");
  const nextHtml =
    bodyCloseIndex >= 0
      ? `${html.slice(0, bodyCloseIndex)}${loaderScript}${html.slice(bodyCloseIndex)}`
      : `${html}${loaderScript}`;

  const headers = new Headers(response.headers);
  headers.delete("content-length");

  return new Response(nextHtml, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    const response = await next();
    if (response instanceof Response) {
      return await injectStaticVlibrasLoader(response);
    }
    return response;
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
