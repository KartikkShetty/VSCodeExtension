/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------*/
 import vscode = require('vscode');
 import cp = require('child_process'); 
 import { Selection, TextEdit } from 'vscode';
 import Stack from './stack';

 export class GoWorkspaceSymbolProvider  {
	private get: { [key: string]: string } = {
        break	:'break',
        default	:'default',
        func	:'func',
        interface	:'interface',
        select	:'select',
        case	:'case',
        defer	:'defer',
        go	:'go',
        map	:'map',
        struct	:'struct',
        chan	:'chan',
        else	:'else',
        goto	:'goto',
        package	:'package',
        switch	:'switch',
        const	:'const',
        fallthrough	:'fallthrough',
        if	:'if',
        range	:'range',
        type	:'type',
        continue	:'continue',
        for	:'for',
        import	:'import',
        return	:'return',
        var	:'var',
    };


 }
 export function getSelectedText(): Selection{

    let editor = vscode.window.activeTextEditor
    let selection = editor.selection
    
    return  selection //editor.document.getText(selection)
	 
 }

export function replaceSelectedText(fnname:string, sel:Selection){

    let newFunc = "func " + fnname + "(){\n" + vscode.window.activeTextEditor.document.getText(sel) + "\n }";
    console.log(newFunc);
   // let textEdit =  vscode.TextEdit.delete(new vscode.Range(sel.start,sel.end));

    // vscode.window.activeTextEditor.edit(editBuilder => {
    //     editBuilder.replace(sel,newFunc)
    // });
  
    let lines = vscode.window.activeTextEditor.document.lineCount;
    console.log(lines);
    console.log(newFunc);

    vscode.window.activeTextEditor.edit(editBuilder => {
        editBuilder.insert(new vscode.Position(lines,0),newFunc)
        editBuilder.delete(sel)
    });

    let luke = vscode.extensions.getExtension("")
    luke.activate()

//   vscode.window.activeTextEditor.edit(editBuilder => {
//         editBuilder.delete(sel)
//     });

    //textEdit.newText = ''    
    console.log("done!!!");
}
export function checkIffunctionValidAndGetParameters(code:string[]){
    let symbols: Stack<string>
    code.forEach(element => {
        let lineElement = element.split(/[\s,]+/)
    });
}
