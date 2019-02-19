"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.rootPath = (() => {
    const pathTokens = path_1.dirname(require.main.filename)
        .split(path_1.sep).filter(s => s.length > 0);
    let index = pathTokens.length;
    let found = false;
    let paths = [];
    while (!found && index >= 0) {
        paths = ['/', ...(pathTokens.slice(0, index--))];
        found = fs_1.existsSync(path_1.join(...paths, 'node_modules'));
    }
    return path_1.join(...(found ? paths : pathTokens));
})();
//# sourceMappingURL=rootPath.js.map