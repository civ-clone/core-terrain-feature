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

export class TerrainFeatureRegistry
  extends EntityRegistry<TerrainFeature>
  implements ITerrainFeatureRegistry
{
  // A feature's terrain is set when it's made and never changes. This replaces a cache that was shared by every
  //  registry and never emptied, and that cost ~0.8s to fill on the first turn after loading a large game: each tile's
  //  first lookup scanned every feature (civ-clone/web-renderer#308).
  private _byTerrain = this.index(
    (feature: TerrainFeature): Terrain => feature.terrain()
  );

  constructor() {
    super(TerrainFeature);
  }

  getByTerrain(terrain: Terrain): TerrainFeature[] {
    return this._byTerrain.get(terrain);
  }
}

export const instance: TerrainFeatureRegistry = new TerrainFeatureRegistry();

export default TerrainFeatureRegistry;
