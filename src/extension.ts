import * as vscode from 'vscode';

import { DASHBOARD_URL, DOCS_URL, resolveServerUrl } from './server';

function serverUrl() {
  return resolveServerUrl(
    vscode.workspace.getConfiguration('pingaura').get('serverUrl'),
  );
}

export function activate(context: vscode.ExtensionContext) {
  const changed = new vscode.EventEmitter<void>();
  const version = String(context.extension.packageJSON.version);

  context.subscriptions.push(
    changed,
    vscode.lm.registerMcpServerDefinitionProvider('pingaura', {
      onDidChangeMcpServerDefinitions: changed.event,
      provideMcpServerDefinitions: () => [
        new vscode.McpHttpServerDefinition(
          'PingAura AI',
          vscode.Uri.parse(serverUrl()),
          {},
          version,
        ),
      ],
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

export function deactivate() {}
