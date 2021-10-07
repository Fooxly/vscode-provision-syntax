import * as vscode from 'vscode';

import { getResultsForKeyword, onDocumentChangeListener } from './ProVision/DocumentHelper';
import { getKeyword, getKeywordNames } from './ProVision/utils';
import ProVision from './ProVision';

const stylingItems = new Map<string, vscode.TextEditorDecorationType>();
const disposables: vscode.Disposable[] = [];
let enabled = true;

export function activate(context: vscode.ExtensionContext) {
	// Initialize the ProVision Core
	ProVision.initialize(context);

	disposables.push(vscode.commands.registerCommand('ProVision.syntax.toggle', handleToggle));

	// Setup all the configruation settings
	handleConfigUpdate();
	// Listen for config changes to apply
	vscode.workspace.onDidChangeConfiguration(() => {
		handleConfigUpdate();
	});
	// Update based on document change
	onDocumentChangeListener(context, handleUpdate);
	// Begin the first update cycle
	handleUpdate();
}

export function deactivate() {
	removeAllStyles();
	for (const disposable of disposables) {
        disposable.dispose();
    }
	ProVision.destroy();
}

const handleToggle = () => {
	enabled = !enabled;
	if (!enabled) {
		removeAllStyles();
	}
	handleUpdate();
};

const handleUpdate = () => {
	if (!enabled) return;
	// If there is no active document, the items should be removed
	if (!vscode.window.activeTextEditor?.document) {
		return;
	}

	for (const keyword of getKeywordNames()) {
		const results = getResultsForKeyword(keyword, vscode.window.activeTextEditor?.document);
		if (results.length === 0) continue;
		if (!stylingItems.has(keyword)) updateStyle(keyword);
		if (!stylingItems.has(keyword)) continue;
		vscode.window.activeTextEditor.setDecorations(stylingItems.get(keyword) as vscode.TextEditorDecorationType, results.map((result) => result.range));
	}
};

// Update an statusbar group or create if it doesn't exist
const updateStyle = (keyword: string) => {
	let item: vscode.TextEditorDecorationType | undefined;
	const keywordProps = getKeyword(keyword);
	if (!keywordProps) return;

	item = vscode.window.createTextEditorDecorationType({
		backgroundColor: 'transparent',
		...keywordProps
	});
	stylingItems.set(keyword, item);
};

// Remove an existing statusbar group
const removeStyle = (style: string) => {
	const item = stylingItems.get(style);
	if (!item) return;
	item.dispose();
	stylingItems.delete(style);
};

const removeAllStyles = () => {
	for (const style of stylingItems.keys()) removeStyle(style);
};

const handleConfigUpdate = () => {
	for (const keyword of getKeywordNames()) {
		updateStyle(keyword);
	}
	handleUpdate();
};
