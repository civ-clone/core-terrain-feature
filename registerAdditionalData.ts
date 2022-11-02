import { instance as additionalDataRegistryInstance } from '@civ-clone/core-data-object/AdditionalDataRegistry';
import features from './AdditionalData/features';

additionalDataRegistryInstance.register(...features());
