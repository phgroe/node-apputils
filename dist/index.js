"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const Bluebird = require("bluebird");
global.Promise = Bluebird;
__export(require("./config"));
__export(require("./environment"));
__export(require("./filesystem"));
__export(require("./inspect"));
__export(require("./stringify-clone"));
//# sourceMappingURL=index.js.map