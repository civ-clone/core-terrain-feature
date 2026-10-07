import Terrain from '@civ-clone/core-terrain/Terrain';
import TerrainFeature from '../TerrainFeature';
import TerrainFeatureRegistry from '../TerrainFeatureRegistry';
import { expect } from 'chai';

describe('TerrainFeatureRegistry', (): void => {
  it("should return a terrain's features in the order they were registered", (): void => {
    const registry = new TerrainFeatureRegistry(),
      terrain = new Terrain(),
      other = new Terrain(),
      first = new TerrainFeature(terrain),
      elsewhere = new TerrainFeature(other),
      second = new TerrainFeature(terrain);

    registry.register(first, elsewhere, second);

    expect(registry.getByTerrain(terrain)).to.deep.equal([first, second]);
    expect(registry.getByTerrain(other)).to.deep.equal([elsewhere]);
  });

  it('should see a feature registered or unregistered after the terrain was first asked about (civ-clone/web-renderer#308)', (): void => {
    const registry = new TerrainFeatureRegistry(),
      terrain = new Terrain(),
      feature = new TerrainFeature(terrain);

    expect(registry.getByTerrain(terrain)).to.deep.equal([]);

    registry.register(feature);

    expect(registry.getByTerrain(terrain)).to.deep.equal([feature]);

    registry.unregister(feature);

    expect(registry.getByTerrain(terrain)).to.deep.equal([]);
  });

  it('should keep each registry to itself', (): void => {
    const first = new TerrainFeatureRegistry(),
      second = new TerrainFeatureRegistry(),
      terrain = new Terrain(),
      feature = new TerrainFeature(terrain);

    first.register(feature);

    expect(first.getByTerrain(terrain)).to.deep.equal([feature]);
    expect(second.getByTerrain(terrain)).to.deep.equal([]);
  });
});
