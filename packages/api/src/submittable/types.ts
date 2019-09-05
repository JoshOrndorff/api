// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address, ExtrinsicStatus, EventRecord, Hash } from '@polkadot/types/interfaces';
import { AnyNumber, AnyU8a, Callback, IExtrinsic, IExtrinsicEra, IKeyringPair, SignatureOptions } from '@polkadot/types/types';

import { Observable } from 'rxjs';

export interface SubmittableResultImpl {
  readonly events: EventRecord[];
  readonly status: ExtrinsicStatus;
  readonly isCompleted: boolean;
  readonly isError: boolean;
  readonly isFinalized: boolean;

  findRecord(section: string, method: string): EventRecord | undefined;
}

export interface SubmittableResultValue {
  events?: EventRecord[];
  status: ExtrinsicStatus;
}

export type SubmitableResultResult<ApiType> =
  ApiType extends 'rxjs'
    ? Observable<SubmittableResultImpl>
    : Promise<Hash>;

export type SubmitableResultSubscription<ApiType> =
  ApiType extends 'rxjs'
    ? Observable<SubmittableResultImpl>
    : Promise<() => void>;

export interface SignerOptions {
  blockHash: AnyU8a;
  era?: IExtrinsicEra | number;
  nonce: AnyNumber;
  tip?: AnyNumber;
}

export interface SubmittableExtrinsic<ApiType> extends IExtrinsic {
  send(): SubmitableResultResult<ApiType>;

  send(statusCb: Callback<SubmittableResultImpl>): SubmitableResultSubscription<ApiType>;

  sign(account: IKeyringPair, _options: Partial<SignatureOptions>): this;

  signAndSend(account: IKeyringPair | string | AccountId | Address, options?: Partial<SignerOptions>): SubmitableResultResult<ApiType>;

  signAndSend(account: IKeyringPair | string | AccountId | Address, statusCb: Callback<SubmittableResultImpl>): SubmitableResultSubscription<ApiType>;

  signAndSend(account: IKeyringPair | string | AccountId | Address, options: Partial<SignerOptions>, statusCb?: Callback<SubmittableResultImpl>): SubmitableResultSubscription<ApiType>;
}
