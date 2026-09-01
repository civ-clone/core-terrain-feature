import Terrain from '@civ-clone/core-terrain/Terrain';
import DataObject from '@civ-clone/core-data-object/DataObject';

export interface ITerrainFeature {
  clone(terrain: Terrain): TerrainFeature;
  terrain(): Terrain;
}

export class TerrainFeature extends DataObject implements ITerrainFeature {
  private _terrain: Terrain;

  constructor(terrain: Terrain) {
    super();

    this._terrain = terrain;
  }

  clone(terrain: Terrain = this.terrain()): TerrainFeature {
    return new (<typeof TerrainFeature>this.constructor)(terrain);
  }

  terrain(): Terrain {
    return this._terrain;
  }
}

export default TerrainFeature;
