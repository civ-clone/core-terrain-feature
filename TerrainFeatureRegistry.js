"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.TerrainFeatureRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const TerrainFeature_1 = require("./TerrainFeature");
const featureCache = new Map();
class TerrainFeatureRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(TerrainFeature_1.default);
    }
    getByTerrain(terrain) {
        if (!featureCache.has(terrain)) {
            featureCache.set(terrain, this.getBy('terrain', terrain));
        }
        return featureCache.get(terrain);
    }
}
exports.TerrainFeatureRegistry = TerrainFeatureRegistry;
exports.instance = new TerrainFeatureRegistry();
exports.default = TerrainFeatureRegistry;
//# sourceMappingURL=TerrainFeatureRegistry.js.map