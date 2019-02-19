"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path_1 = require("path");
const util_1 = require("util");
function scanDir(scanpath) {
    return __awaiter(this, void 0, void 0, function* () {
        const readdir = util_1.promisify(fs.readdir);
        const stat = util_1.promisify(fs.stat);
        const joiner = (name) => path_1.join(scanpath, name);
        const resolver = (path) => (stat(path).then((st) => Object.assign(st, { path })));
        const files = yield readdir(scanpath, 'utf8');
        return Promise.all(files.map(joiner).map(resolver));
    });
}
exports.scanDir = scanDir;
//# sourceMappingURL=scanDir.js.map