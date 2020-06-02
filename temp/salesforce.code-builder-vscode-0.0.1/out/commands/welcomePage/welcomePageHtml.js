"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = void 0;
function html(styleUri) {
    return `<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <link href="${styleUri}" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Builder</title>
</head>
<body>
    <p class="heading">Code Builder: Lets get started!</p>
    
</body>
</html>`;
}
exports.html = html;
//# sourceMappingURL=welcomePageHtml.js.map