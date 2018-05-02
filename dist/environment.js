"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
_a = (() => {
    let env = process.env.NODE_ENV || '';
    if (0 > ['live', 'develop', 'test'].indexOf(env)) {
        env = 'develop';
    }
    return {
        isDevelop: env === 'develop',
        isLive: env === 'live',
        isTest: env === 'test',
    };
})(), exports.isDevelop = _a.isDevelop, exports.isLive = _a.isLive, exports.isTest = _a.isTest;
var _a;
//# sourceMappingURL=environment.js.map