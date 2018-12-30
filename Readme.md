# Salt Visual Studio Code language extension

Visual Studio Code language extension for the Salt language.

So far it only has the syntax definition.

### Building
Use VSCode for development of the extension itself. Load the code into a new workspace, select the `src/extension.ts` module and run the `Start Debugging` command in VSCode. This should open a new VSCode window with the current version of the extension running. After modifing some of the code, use the `Reload` command in the VSCode debug pane to reload the extension into the second window.

### Packaging
Once you're happy with the changes, package the extension into a `.vsix` file ready to installed more permanently into VSCode. Use the following commands from the root of the extension source directory. The `vsce` package is the VSCode Extension management command line tool

```
$ npm install vsce
$ node_modules/.bin/vsce package
$ code --install-extension ./salt-vscode-XX.XX.XX.vsix  
```
