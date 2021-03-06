"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
_a = (() => {
    let env = process.env.NODE_ENV || '';
    if (0 > ['develop', 'live', 'production', 'test'].indexOf(env)) {
        env = 'develop';
    }
    return {
        isDevelop: env === 'develop',
        isLive: env === 'live' || env === 'production',
        isTest: env === 'test',
    };
})(), exports.isDevelop = _a.isDevelop, exports.isLive = _a.isLive, exports.isTest = _a.isTest;
//# sourceMappingURL=environment.js.map