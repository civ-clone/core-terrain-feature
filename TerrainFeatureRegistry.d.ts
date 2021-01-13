import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Terrain from '@civ-clone/core-terrain/Terrain';
import TerrainFeature from './TerrainFeature';
export interface ITerrainFeatureRegistry
  extends IEntityRegistry<TerrainFeature> {
  getByTerrain(terrain: Terrain): TerrainFeature[];
}
export declare class TerrainFeatureRegistry
  extends EntityRegistry<TerrainFeature>
  implements ITerrainFeatureRegistry {
  constructor();
  getByTerrain(terrain: Terrain): TerrainFeature[];
}
export declare const instance: TerrainFeatureRegistry;
export default TerrainFeatureRegistry;
