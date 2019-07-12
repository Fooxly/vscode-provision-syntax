import * as vscode from 'vscode'
import Document from './core/document/Document'
import Syntaxing from './syntax/Syntaxing'
import Provision from './core/Provision'

var document: Document
var syntaxing: Syntaxing

const modules: Provision[] = []

export function activate(context: vscode.ExtensionContext) {
	document = new Document(context)
	syntaxing = new Syntaxing()
	modules.push(syntaxing)
	modules.forEach(m => m.initialize())
	document.onUpdate(d => {
		modules.forEach(m => m.onUpdate(d))
	})
	
	vscode.workspace.onDidChangeConfiguration(() => {		
		document.configChanged()
		modules.forEach(m => m.configChanged())
	}, null, context.subscriptions)

	document.start()
}

export function deactivate() {
	document.dispose()
	modules.forEach(m => m.dispose())
}
