import { describe, expect, it } from 'vitest';

import { DEFAULT_SERVER_URL, resolveServerUrl } from './server';

describe('resolveServerUrl', () => {
  it('uses the PingAura server by default', () => {
    expect(resolveServerUrl(undefined)).toBe(DEFAULT_SERVER_URL);
    expect(resolveServerUrl('  ')).toBe(DEFAULT_SERVER_URL);
  });

  it('keeps a configured https URL', () => {
    expect(resolveServerUrl('https://staging.pingaura.ai/api/mcp')).toBe(
      'https://staging.pingaura.ai/api/mcp',
    );
  });

  it('allows http only on localhost', () => {
    expect(resolveServerUrl('http://localhost:3000/api/mcp')).toBe(
      'http://localhost:3000/api/mcp',
    );
    expect(resolveServerUrl('http://example.com/api/mcp')).toBe(
      DEFAULT_SERVER_URL,
    );
  });

  it('refuses invalid URLs, other schemes and embedded credentials', () => {
    expect(resolveServerUrl('not a url')).toBe(DEFAULT_SERVER_URL);
    expect(resolveServerUrl('file:///etc/passwd')).toBe(DEFAULT_SERVER_URL);
    expect(resolveServerUrl('https://user:pass@example.com/mcp')).toBe(
      DEFAULT_SERVER_URL,
    );
  });
});
