"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feature = exports.Feature = void 0;
const TerrainFeatureRegistry_1 = require("../TerrainFeatureRegistry");
const Criterion_1 = require("@civ-clone/core-rule/Criterion");
const Effect_1 = require("@civ-clone/core-rule/Effect");
const Rule_1 = require("@civ-clone/core-rule/Rule");
class Feature extends Rule_1.default {
}
exports.Feature = Feature;
exports.default = Feature;
const feature = (TerrainType, FeatureType, chance = 0.2, terrainFeatureRegistry = TerrainFeatureRegistry_1.instance, randomNumberGenerator = () => Math.random()) => [
    new Feature(new Criterion_1.default((TerrainFeatureType) => TerrainFeatureType === FeatureType), new Criterion_1.default((TerrainFeatureType, terrain) => terrain instanceof TerrainType), new Criterion_1.default(() => randomNumberGenerator() <= chance), new Effect_1.default((TerrainFeatureType, terrain) => terrainFeatureRegistry.register(new TerrainFeatureType(terrain)))),
];
exports.feature = feature;
//# sourceMappingURL=Feature.js.map