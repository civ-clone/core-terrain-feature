import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import TerrainFeature from './TerrainFeature';
export interface IAvailableTerrainFeatureRegistry
  extends IConstructorRegistry<TerrainFeature> {}
export declare class AvailableTerrainFeatureRegistry
  extends ConstructorRegistry<TerrainFeature>
  implements IAvailableTerrainFeatureRegistry
{
  constructor();
}
export declare const instance: AvailableTerrainFeatureRegistry;
export default AvailableTerrainFeatureRegistry;
