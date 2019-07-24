> # Class: MapType <**S, T, V, E**>

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **MapType**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v4_storage_.maptype.md#constructor)

### Accessors

* [Type](_metadata_v4_storage_.maptype.md#type)
* [encodedLength](_metadata_v4_storage_.maptype.md#encodedlength)
* [hasher](_metadata_v4_storage_.maptype.md#hasher)
* [isEmpty](_metadata_v4_storage_.maptype.md#isempty)
* [isLinked](_metadata_v4_storage_.maptype.md#islinked)
* [key](_metadata_v4_storage_.maptype.md#key)
* [value](_metadata_v4_storage_.maptype.md#value)

### Methods

* [eq](_metadata_v4_storage_.maptype.md#eq)
* [get](_metadata_v4_storage_.maptype.md#get)
* [getAtIndex](_metadata_v4_storage_.maptype.md#getatindex)
* [toArray](_metadata_v4_storage_.maptype.md#toarray)
* [toHex](_metadata_v4_storage_.maptype.md#tohex)
* [toJSON](_metadata_v4_storage_.maptype.md#tojson)
* [toRawType](_metadata_v4_storage_.maptype.md#torawtype)
* [toString](_metadata_v4_storage_.maptype.md#tostring)
* [toU8a](_metadata_v4_storage_.maptype.md#tou8a)
* [with](_metadata_v4_storage_.maptype.md#static-with)

## Constructors

###  constructor

\+ **new MapType**(`value?`: any): *[MapType](_metadata_v4_storage_.maptype.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v4/Storage.ts:25](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/Metadata/v4/Storage.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[MapType](_metadata_v4_storage_.maptype.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasher

• **get hasher**(): *[StorageHasher](_primitive_storagehasher_.storagehasher.md)*

*Defined in [Metadata/v4/Storage.ts:38](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/Metadata/v4/Storage.ts#L38)*

**`description`** The hash algorithm used to hash keys, as [StorageHasher](_primitive_storagehasher_.storagehasher.md)

**Returns:** *[StorageHasher](_primitive_storagehasher_.storagehasher.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isLinked

• **get isLinked**(): *boolean*

*Defined in [Metadata/v4/Storage.ts:45](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/Metadata/v4/Storage.ts#L45)*

**`description`** Is this an enumerable linked map

**Returns:** *boolean*

___

###  key

• **get key**(): *[Type](_primitive_type_.type.md)*

*Defined in [Metadata/v4/Storage.ts:52](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/Metadata/v4/Storage.ts#L52)*

**`description`** The mapped key as [Type](_metadata_v4_storage_.maptype.md#type)

**Returns:** *[Type](_primitive_type_.type.md)*

___

###  value

• **get value**(): *[Type](_primitive_type_.type.md)*

*Defined in [Metadata/v4/Storage.ts:59](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/Metadata/v4/Storage.ts#L59)*

**`description`** The mapped value as [Type](_metadata_v4_storage_.maptype.md#type)

**Returns:** *[Type](_primitive_type_.type.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L187)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L195)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*