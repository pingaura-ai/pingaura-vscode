import * as vscode from 'vscode';

import { DASHBOARD_URL, DOCS_URL, resolveServerUrl } from './server';

const PROVIDER_ID = 'pingaura';

function serverUrl(): string {
  return resolveServerUrl(
    vscode.workspace.getConfiguration('pingaura').get<string>('serverUrl'),
  );
}

export function activate(context: vscode.ExtensionContext): void {
  const changed = new vscode.EventEmitter<void>();
  const version = String(context.extension.packageJSON.version ?? '0.0.0');

  // VS Code signs the user in through the server's OAuth metadata the first time a tool is used.
  context.subscriptions.push(
    changed,
    vscode.lm.registerMcpServerDefinitionProvider(PROVIDER_ID, {
      onDidChangeMcpServerDefinitions: changed.event,
      provideMcpServerDefinitions: () => [
        new vscode.McpHttpServerDefinition(
          'PingAura AI',
          vscode.Uri.parse(serverUrl()),
          {},
          version,
        ),
      ],
      resolveMcpServerDefinition: (server) => server,
    }),
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration('pingaura.serverUrl')) changed.fire();
    }),
    vscode.commands.registerCommand('pingaura.openDashboard', () =>
      vscode.env.openExternal(vscode.Uri.parse(DASHBOARD_URL)),
    ),
    vscode.commands.registerCommand('pingaura.openDocs', () =>
      vscode.env.openExternal(vscode.Uri.parse(DOCS_URL)),
    ),
    vscode.commands.registerCommand('pingaura.getStarted', () =>
      vscode.commands.executeCommand(
        'workbench.action.openWalkthrough',
        `${context.extension.id}#getStarted`,
        false,
      ),
    ),
  );
}

export function deactivate(): void {}
