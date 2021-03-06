// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Vec } from '../codec';
import { Codec } from '../types';

export interface MetadataInterface<Modules extends Codec> extends Codec {
  modules: Vec<Modules>;
}
