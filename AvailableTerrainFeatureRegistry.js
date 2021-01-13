"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.AvailableTerrainFeatureRegistry = void 0;
const ConstructorRegistry_1 = require("@civ-clone/core-registry/ConstructorRegistry");
const TerrainFeature_1 = require("./TerrainFeature");
class AvailableTerrainFeatureRegistry extends ConstructorRegistry_1.ConstructorRegistry {
    constructor() {
        super(TerrainFeature_1.default);
    }
}
exports.AvailableTerrainFeatureRegistry = AvailableTerrainFeatureRegistry;
exports.instance = new AvailableTerrainFeatureRegistry();
exports.default = AvailableTerrainFeatureRegistry;
//# sourceMappingURL=AvailableTerrainFeatureRegistry.js.map