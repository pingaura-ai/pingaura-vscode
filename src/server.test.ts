import { describe, expect, it } from 'vitest';

import { DEFAULT_SERVER_URL, resolveServerUrl } from './server';

describe('resolveServerUrl', () => {
  it('defaults to the PingAura server', () => {
    expect(resolveServerUrl(undefined)).toBe(DEFAULT_SERVER_URL);
    expect(resolveServerUrl(' ')).toBe(DEFAULT_SERVER_URL);
  });

  it('accepts pingaura.ai hosts and localhost', () => {
    expect(resolveServerUrl('https://mcp.pingaura.ai/api/mcp')).toBe(
      'https://mcp.pingaura.ai/api/mcp',
    );
    expect(resolveServerUrl('http://localhost:3000/api/mcp')).toBe(
      'http://localhost:3000/api/mcp',
    );
  });

  it('rejects other hosts, schemes and credentials', () => {
    for (const url of [
      'https://example.com/api/mcp',
      'https://pingaura.ai.example.com/mcp',
      'http://mcp.pingaura.ai/api/mcp',
      'file:///etc/passwd',
      'https://user:pass@www.pingaura.ai/api/mcp',
      'not a url',
    ]) {
      expect(resolveServerUrl(url)).toBe(DEFAULT_SERVER_URL);
    }
  });
});
