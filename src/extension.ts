import * as vscode from 'vscode'
import Core from './core/src/Core'
import Provision from './core/src/Provision'
import Syntaxing from './syntax/Syntaxing'

var syntaxing: Syntaxing
var core: Core

const modules: Provision[] = []

export function activate(context: vscode.ExtensionContext) {
	core = new Core(context)

	syntaxing = new Syntaxing()
	modules.push(syntaxing)
	core.onUpdate(d => {
		modules.forEach(m => m.onUpdate(d))
	})
	
	vscode.workspace.onDidChangeConfiguration(() => {
		modules.forEach(m => m.configChanged())
	}, null, context.subscriptions)
	
	modules.forEach(m => m.initialize())
	core.start()
}

export function deactivate() {
	core.dispose()
	modules.forEach(m => m.dispose())
}
