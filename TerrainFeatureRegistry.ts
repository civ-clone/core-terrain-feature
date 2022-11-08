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

const featureCache = new Map<Terrain, TerrainFeature[]>();

export class TerrainFeatureRegistry
  extends EntityRegistry<TerrainFeature>
  implements ITerrainFeatureRegistry
{
  constructor() {
    super(TerrainFeature);
  }

  getByTerrain(terrain: Terrain): TerrainFeature[] {
    if (!featureCache.has(terrain)) {
      featureCache.set(terrain, this.getBy('terrain', terrain));
    }

    return featureCache.get(terrain)!;
  }
}

export const instance: TerrainFeatureRegistry = new TerrainFeatureRegistry();

export default TerrainFeatureRegistry;
