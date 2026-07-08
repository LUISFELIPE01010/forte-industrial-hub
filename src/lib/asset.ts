// Assets are served from Lovable's CDN under /__l5e/*.
// On non-Lovable hosts (e.g. Vercel), that path 404s and returns the SPA
// HTML shell, which shows as a broken image. Prefix relative asset URLs
// with the stable Lovable project origin so they load anywhere.
const LOVABLE_CDN_ORIGIN =
  "https://project--e3ed0461-28e5-4cbd-8a5e-a3993d4d3b9f.lovable.app";

export function assetUrl(asset: { url: string }): string {
  const u = asset.url;
  if (/^https?:\/\//i.test(u)) return u;
  return `${LOVABLE_CDN_ORIGIN}${u}`;
}
