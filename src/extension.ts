
import * as vscode   from 'vscode';
import * as vsclient from 'vscode-languageclient';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Salt extension activating');

	// The command has been defined in the package.json file
	let dHello = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	context.subscriptions.push(dHello);

        // TODO: make configurable.
        // TODO: send a popup message if we can't find the salt executable.
        //       we can use the info command above.
	let serverPath = "/Users/benl/devel/salt-vscode/bin/salt.sh";
	let serverOptions: vsclient.ServerOptions = {
		run:   { command: serverPath, args: ['-lsp'] },
		debug: { command: serverPath, args: ['-lsp-debug']}
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

	console.log('Salt extension activated');
}

// this method is called when your extension is deactivated
export function deactivate() {}
