import * as vscode from 'vscode';

import { getCountForGroup, onDocumentChangeListener } from './ProVision/DocumentHelper';
import { getGroups, getKeyword, getKeywordNames } from './ProVision/utils';
import { Group } from './Provision/types';
import ProVision from './ProVision';

const stylingItems = new Map<string, vscode.TextEditorDecorationType>();
let config: vscode.WorkspaceConfiguration | undefined = undefined;

export function activate(context: vscode.ExtensionContext) {
	// Initialize the ProVision Core
	ProVision.initialize(context);
	// Setup all the configruation settings
	handleConfigUpdate();

	// Update based on document change
	onDocumentChangeListener(context, handleUpdate);
	// Begin the first update cycle
	handleUpdate();
}

export function deactivate() {
	removeAllStyles();
	ProVision.destroy();
}

const handleUpdate = () => {
	// If there is no active document, the items should be removed
	if (!vscode.window.activeTextEditor?.document) {
		removeAllStyles();
		return;
	}

	for (const keyword of getKeywordNames()) {
		updateStyle(keyword);
		// const count = getCountForGroup(group, vscode.window.activeTextEditor?.document as vscode.TextDocument);
		// if (count === 0) removeStyle(keyword);
		// else updateGroup(group, count);
	}
};

// Update an statusbar group or create if it doesn't exist
const updateStyle = (keyword: string) => {
	let item: vscode.TextEditorDecorationType | undefined;
	const keywordProps = getKeyword(keyword);

	// // Check if the item already exists, otherwise create a new one
	// if (statusbarItems.has(group)) {
	// 	item = statusbarItems.get(group);
	// } else {
	// 	item = vscode.window.createStatusBarItem(
	// 		(config?.get?.('bar.side') ?? 'left') === 'left' ?
	// 			vscode.StatusBarAlignment.Left :
	// 			vscode.StatusBarAlignment.Right,
	// 			config?.get?.('bar.priority') === undefined ? 10 : config?.get?.('bar.priority'));
	// }
	// // Check if the item actually exists
	// if (!item) return;
	// const groupProps: Group | undefined = config?.get<any | undefined>('groups')?.[group];
	
	// // Update the props of the statusbar item
	// item.name = group;
	// if (groupProps?.tooltip?.length) item.tooltip = groupProps.tooltip;
	// else item.tooltip = group.charAt(0).toUpperCase() + group.slice(1).toLowerCase();
	// item.text = (
	// 	!groupProps?.title
	// 		? `${group.charAt(0).toUpperCase() + group.slice(1).toLowerCase()} (${counter})`
	// 		: typeof groupProps.title === 'string'
	// 			? groupProps.title.replace('{0}', counter.toString())
	// 			: counter === 1 && groupProps.title['1']?.length
	// 				? groupProps.title['1'].replace('{0}', counter.toString())
	// 				: groupProps.title['*'].replace('{0}', counter.toString())
	// );
	// if (groupProps?.foregroundStyle?.length) item.color = groupProps?.foregroundStyle[0] === '#' ? groupProps?.foregroundStyle : new vscode.ThemeColor(groupProps.foregroundStyle);
	// if (groupProps?.backgroundStyle?.length) item.backgroundColor = new vscode.ThemeColor(groupProps.backgroundStyle);
	// item.command = {
	// 	command: 'ProVision.listGroup',
	// 	arguments: [group],
	// 	title: group,
	// };
	// statusbarItems.set(group, item);
	// item.show();
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
	config = vscode.workspace.getConfiguration('ProVision');
	handleUpdate();
};
