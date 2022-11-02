import { TerrainFeatureRegistry } from '../TerrainFeatureRegistry';
import { IConstructor } from '@civ-clone/core-registry/Registry';
import Rule from '@civ-clone/core-rule/Rule';
import Terrain from '@civ-clone/core-terrain/Terrain';
import TerrainFeature from '../TerrainFeature';
export declare class Feature extends Rule<
  [IConstructor<TerrainFeature>, Terrain],
  void
> {}
export default Feature;
export declare const feature: (
  TerrainType: IConstructor<Terrain>,
  FeatureType: IConstructor<TerrainFeature>,
  chance?: number,
  terrainFeatureRegistry?: TerrainFeatureRegistry,
  randomNumberGenerator?: () => number
) => Feature[];
