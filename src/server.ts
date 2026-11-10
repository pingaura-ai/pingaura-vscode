export const DEFAULT_SERVER_URL = 'https://www.pingaura.ai/api/mcp';
export const DASHBOARD_URL = 'https://www.pingaura.ai/home';
export const DOCS_URL = 'https://www.pingaura.ai/docs/mcp/mcp-server';

export function resolveServerUrl(configured: unknown): string {
  if (typeof configured !== 'string' || !configured.trim()) {
    return DEFAULT_SERVER_URL;
  }

  let url: URL;
  try {
    url = new URL(configured.trim());
  } catch {
    return DEFAULT_SERVER_URL;
  }

  const host = url.hostname;
  const local = host === 'localhost' || host === '127.0.0.1';
  const ours = host === 'pingaura.ai' || host.endsWith('.pingaura.ai');
  const ok =
    (url.protocol === 'https:' && (ours || local)) ||
    (url.protocol === 'http:' && local);

  if (!ok || url.username || url.password) return DEFAULT_SERVER_URL;
  return url.toString();
}
