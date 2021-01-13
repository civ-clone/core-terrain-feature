"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _terrain;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerrainFeature = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
class TerrainFeature extends DataObject_1.default {
    constructor(terrain) {
        super();
        _terrain.set(this, void 0);
        __classPrivateFieldSet(this, _terrain, terrain);
    }
    clone(terrain = this.terrain()) {
        return new this.constructor(terrain);
    }
    terrain() {
        return __classPrivateFieldGet(this, _terrain);
    }
}
exports.TerrainFeature = TerrainFeature;
_terrain = new WeakMap();
exports.default = TerrainFeature;
//# sourceMappingURL=TerrainFeature.js.map