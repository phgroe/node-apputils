"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const _1 = require(".");
function finalizeConfig(schema, callback) {
    const configFile = path_1.join(_1.rootPath, 'config.json5');
    if (fs_1.existsSync(configFile)) {
        try {
            schema.loadFile(configFile);
        }
        catch (error) {
            console.error('Error while trying to load %s', configFile);
            console.error(error);
        }
    }
    if (callback) {
        callback(schema);
    }
    schema.validate({
        allowed: 'strict',
    });
    return Object.freeze(schema.getProperties());
}
exports.finalizeConfig = finalizeConfig;
//# sourceMappingURL=config.js.map