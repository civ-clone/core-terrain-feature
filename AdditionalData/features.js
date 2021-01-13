"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdditionalData = void 0;
const TerrainFeatureRegistry_1 = require("../TerrainFeatureRegistry");
const AdditionalData_1 = require("@civ-clone/core-data-object/AdditionalData");
const Terrain_1 = require("@civ-clone/core-terrain/Terrain");
const getAdditionalData = (terrainFeatureRegistry = TerrainFeatureRegistry_1.instance) => [
    new AdditionalData_1.default(Terrain_1.default, 'features', (terrain) => terrainFeatureRegistry.getByTerrain(terrain)),
];
exports.getAdditionalData = getAdditionalData;
exports.default = exports.getAdditionalData;
//# sourceMappingURL=features.js.map