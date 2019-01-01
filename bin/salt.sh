#!/bin/sh

echo starting >> /Users/benl/devel/salt-vscode/log/startup

# TODO: check return code.
# log some error if we can't find the salt binary.
/Users/benl/devel/salt/bin/salt -lsp-debug /Users/benl/devel/salt-vscode/log/lsp.txt
