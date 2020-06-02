"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomePage = void 0;
const vscode = require("vscode");
const welcomePageHtml_1 = require("./welcomePageHtml");
const path = require("path");
let WelcomePage = /** @class */ (() => {
    class WelcomePage {
        static register(context) {
            WelcomePage.extensionPath = context.extensionPath;
            const startCommand = vscode.commands.registerCommand("welcomePage.start", () => {
                WelcomePage.createOrShowWebView(context);
            });
            // show the welcome page when the extension is activated
            WelcomePage.createOrShowWebView(context);
            return [startCommand];
        }
        static createOrShowWebView(context) {
            const columnToShowIn = vscode.window.activeTextEditor
                ? vscode.window.activeTextEditor.viewColumn
                : undefined;
            if (WelcomePage.currentPanel) {
                WelcomePage.currentPanel.reveal(columnToShowIn);
                return;
            }
            else {
                WelcomePage.currentPanel = vscode.window.createWebviewPanel(WelcomePage.viewType, "Welcome To Code Builder", columnToShowIn || vscode.ViewColumn.One, {
                    // And restrict the webview to only loading content from our extension's `media` directory.
                    localResourceRoots: [
                        vscode.Uri.file(path.join(context.extensionPath, "media")),
                    ],
                });
            }
            const webview = WelcomePage.currentPanel.webview;
            webview.html = WelcomePage.getWebViewContent(webview);
            WelcomePage.currentPanel.onDidDispose(() => {
                this.currentPanel = undefined;
            }, null, context.subscriptions);
        }
        static getWebViewContent(webview) {
            const styleUri = webview.asWebviewUri(vscode.Uri.file(path.join(this.extensionPath, "media", "style.css")));
            return welcomePageHtml_1.html(styleUri);
        }
    }
    WelcomePage.currentPanel = undefined;
    WelcomePage.viewType = "welcomePage";
    return WelcomePage;
})();
exports.WelcomePage = WelcomePage;
//# sourceMappingURL=welcomePage.js.map