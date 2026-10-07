"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.TerrainFeatureRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const TerrainFeature_1 = require("./TerrainFeature");
class TerrainFeatureRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(TerrainFeature_1.default);
        // A feature's terrain is set when it's made and never changes. This replaces a cache that was shared by every
        //  registry and never emptied, and that cost ~0.8s to fill on the first turn after loading a large game: each tile's
        //  first lookup scanned every feature (civ-clone/web-renderer#308).
        this._byTerrain = this.index((feature) => feature.terrain());
    }
    getByTerrain(terrain) {
        return this._byTerrain.get(terrain);
    }
}
exports.TerrainFeatureRegistry = TerrainFeatureRegistry;
exports.instance = new TerrainFeatureRegistry();
exports.default = TerrainFeatureRegistry;
//# sourceMappingURL=TerrainFeatureRegistry.js.map