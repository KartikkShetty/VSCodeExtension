'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
/////my code////
import refactor = require('./extractFunction')
/////end/////

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "test" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');

        let options: vscode.InputBoxOptions = {
            prompt: "Label: ",
            placeHolder: "(placeholder)"
        }
        
        let fnname:string
        vscode.window.showInputBox(options).then(value => {
            if (!value) return;
            console.log(value);
            fnname = value
            // show the next dialog, etc.
            let sel = refactor.getSelectedText();
            let text= vscode.window.activeTextEditor.document.getText(sel);
            vscode.window.showInformationMessage(text);
    
            refactor.replaceSelectedText("fnname",sel)
    
        });

        // let sel = refactor.getSelectedText();
        // let text= vscode.window.activeTextEditor.document.getText(sel);
        // vscode.window.showInformationMessage(text);
        // console.log('replacing text')
        // refactor.replaceSelectedText("fnname",sel)

    });
    vscode.commands.registerTextEditorCommand('markdown.showPreview',()=>{
        // Display a message box to the user        
        vscode.window.showInformationMessage('Hello Preview Menu!');


    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}