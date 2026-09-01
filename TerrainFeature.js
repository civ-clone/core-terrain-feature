"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerrainFeature = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
class TerrainFeature extends DataObject_1.default {
    constructor(terrain) {
        super();
        this._terrain = terrain;
    }
    clone(terrain = this.terrain()) {
        return new this.constructor(terrain);
    }
    terrain() {
        return this._terrain;
    }
}
exports.TerrainFeature = TerrainFeature;
exports.default = TerrainFeature;
//# sourceMappingURL=TerrainFeature.js.map