import Terrain from '@civ-clone/core-terrain/Terrain';
import DataObject from '@civ-clone/core-data-object/DataObject';
export interface ITerrainFeature {
  clone(terrain: Terrain): TerrainFeature;
  terrain(): Terrain;
}
export declare class TerrainFeature
  extends DataObject
  implements ITerrainFeature
{
  #private;
  constructor(terrain: Terrain);
  clone(terrain?: Terrain): TerrainFeature;
  terrain(): Terrain;
}
export default TerrainFeature;
