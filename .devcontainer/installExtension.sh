#!/bin/bash
set -e

parent_path=parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
mv $parent_path/temp/salesforce.code-builder-vscode-0.0.1 $HOME/.vscode-remote/extensions