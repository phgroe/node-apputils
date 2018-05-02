"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
exports.inspect = (obj, depth = null, colors = true, linebreak = true) => util_1.inspect(obj, {
    breakLength: linebreak ? 128 : Infinity,
    colors,
    depth,
    showHidden: true,
});
//# sourceMappingURL=inspect.js.map