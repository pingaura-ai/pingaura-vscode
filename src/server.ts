export const DEFAULT_SERVER_URL = 'https://www.pingaura.ai/api/mcp';
export const DASHBOARD_URL = 'https://www.pingaura.ai/home';
export const DOCS_URL = 'https://www.pingaura.ai/docs/mcp/mcp-server';

/** Accepts https URLs, and http only on localhost for local development; anything else falls back to the default. */
export function resolveServerUrl(configured: unknown): string {
  if (typeof configured !== 'string' || configured.trim() === '') {
    return DEFAULT_SERVER_URL;
  }

  let url: URL;

  try {
    url = new URL(configured.trim());
  } catch {
    return DEFAULT_SERVER_URL;
  }

  const local = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  const allowed = url.protocol === 'https:' || (url.protocol === 'http:' && local);

  if (!allowed || url.username || url.password) return DEFAULT_SERVER_URL;

  return url.toString();
}
