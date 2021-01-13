import {
  TerrainFeatureRegistry,
  instance as terrainFeatureRegistryInstance,
} from '../TerrainFeatureRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import Terrain from '@civ-clone/core-terrain/Terrain';

export const getAdditionalData = (
  terrainFeatureRegistry: TerrainFeatureRegistry = terrainFeatureRegistryInstance
) => [
  new AdditionalData(Terrain, 'features', (terrain: Terrain) =>
    terrainFeatureRegistry.getByTerrain(terrain)
  ),
];

export default getAdditionalData;
