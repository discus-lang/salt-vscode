
import * as vscode   from 'vscode';
import * as vsclient from 'vscode-languageclient';

export function activate(context: vscode.ExtensionContext) {

        // Get the server path from the config.
        let cfgServerPath: string | undefined
                = vscode.workspace.getConfiguration('salt').get('server.executable');

        let serverPath: string
                = cfgServerPath === null
                        ? 'salt'
                        : "" + cfgServerPath;

        // Get the debug log from the config, if it's set.
        let cfgDebugLog: string | undefined
                = vscode.workspace.getConfiguration('salt').get('trace.debug');

        let args: string[]
                =  cfgDebugLog === null
                        ? ['-lsp']
                        : ['-lsp-debug', "" + cfgDebugLog];

        // Start the language server.
	let serverOptions: vsclient.ServerOptions = {
		run:   { command: serverPath, args: args },
		debug: { command: serverPath, args: args }
	};

	let clientOptions: vsclient.LanguageClientOptions = {
		documentSelector: ['salt'],
		synchronize: {
			configurationSection: 'salt',
			fileEvents: vscode.workspace.createFileSystemWatcher('**/.saltrc')
		}
	};

	let dClient = new vsclient.LanguageClient(
		'salt',
		'Salt Language Server',
		serverOptions,
		clientOptions).start();
	context.subscriptions.push(dClient);
}

export function deactivate() {}
