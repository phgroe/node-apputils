"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
exports.rootPath = (() => {
    const pathTokens = path.dirname(module.parent.parent.filename)
        .split(path.sep).filter(s => s.length > 0);
    let index = 1;
    let found = false;
    let paths = [];
    while (!found && index < pathTokens.length) {
        paths = ['/', ...(pathTokens.slice(0, index++))];
        found = fs.existsSync(path.join(...paths, 'node_modules'));
    }
    return path.join(...paths);
})();
//# sourceMappingURL=filesystem.js.map