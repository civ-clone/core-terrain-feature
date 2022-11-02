import {
  TerrainFeatureRegistry,
  instance as terrainFeatureRegistryInstance,
} from '../TerrainFeatureRegistry';
import Criterion from '@civ-clone/core-rule/Criterion';
import Effect from '@civ-clone/core-rule/Effect';
import { IConstructor } from '@civ-clone/core-registry/Registry';
import Rule from '@civ-clone/core-rule/Rule';
import Terrain from '@civ-clone/core-terrain/Terrain';
import TerrainFeature from '../TerrainFeature';

export class Feature extends Rule<
  [IConstructor<TerrainFeature>, Terrain],
  void
> {}

export default Feature;

export const feature: (
  TerrainType: IConstructor<Terrain>,
  FeatureType: IConstructor<TerrainFeature>,
  chance?: number,
  terrainFeatureRegistry?: TerrainFeatureRegistry,
  randomNumberGenerator?: () => number
) => Feature[] = (
  TerrainType: IConstructor<Terrain>,
  FeatureType: IConstructor<TerrainFeature>,
  chance: number = 0.2,
  terrainFeatureRegistry: TerrainFeatureRegistry = terrainFeatureRegistryInstance,
  randomNumberGenerator: () => number = () => Math.random()
): Feature[] => [
  new Feature(
    new Criterion(
      (TerrainFeatureType: IConstructor<TerrainFeature>): boolean =>
        TerrainFeatureType === FeatureType
    ),
    new Criterion(
      (
        TerrainFeatureType: IConstructor<TerrainFeature>,
        terrain: Terrain
      ): boolean => terrain instanceof TerrainType
    ),
    new Criterion((): boolean => randomNumberGenerator() <= chance),
    new Effect(
      (
        TerrainFeatureType: IConstructor<TerrainFeature>,
        terrain: Terrain
      ): void =>
        terrainFeatureRegistry.register(new TerrainFeatureType(terrain))
    )
  ),
];
