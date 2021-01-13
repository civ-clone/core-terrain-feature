import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import TerrainFeature from './TerrainFeature';

export interface IAvailableTerrainFeatureRegistry
  extends IConstructorRegistry<TerrainFeature> {}

export class AvailableTerrainFeatureRegistry
  extends ConstructorRegistry<TerrainFeature>
  implements IAvailableTerrainFeatureRegistry {
  constructor() {
    super(TerrainFeature);
  }
}

export const instance: AvailableTerrainFeatureRegistry = new AvailableTerrainFeatureRegistry();

export default AvailableTerrainFeatureRegistry;
