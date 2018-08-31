// package: 
// file: types/types.proto

import * as jspb from "google-protobuf";

export class Identity extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identity.AsObject;
  static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identity;
  static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
}

export namespace Identity {
  export type AsObject = {
    firstName: string,
    lastName: string,
    username: string,
  }
}

export class CreateChannelTx extends jspb.Message {
  getAddressSigned(): string;
  setAddressSigned(value: string): void;

  getPubKey(): string;
  setPubKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChannelTx.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChannelTx): CreateChannelTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateChannelTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChannelTx;
  static deserializeBinaryFromReader(message: CreateChannelTx, reader: jspb.BinaryReader): CreateChannelTx;
}

export namespace CreateChannelTx {
  export type AsObject = {
    addressSigned: string,
    pubKey: string,
  }
}

export class MapEntry extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MapEntry): MapEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapEntry;
  static deserializeBinaryFromReader(message: MapEntry, reader: jspb.BinaryReader): MapEntry;
}

export namespace MapEntry {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class TokenMeta extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getDecimals(): number;
  setDecimals(value: number): void;

  getInitialsupply(): number;
  setInitialsupply(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenMeta.AsObject;
  static toObject(includeInstance: boolean, msg: TokenMeta): TokenMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenMeta;
  static deserializeBinaryFromReader(message: TokenMeta, reader: jspb.BinaryReader): TokenMeta;
}

export namespace TokenMeta {
  export type AsObject = {
    name: string,
    symbol: string,
    decimals: number,
    initialsupply: number,
  }
}

export class NewChannelPostTx extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getOwner(): string;
  setOwner(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewChannelPostTx.AsObject;
  static toObject(includeInstance: boolean, msg: NewChannelPostTx): NewChannelPostTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewChannelPostTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewChannelPostTx;
  static deserializeBinaryFromReader(message: NewChannelPostTx, reader: jspb.BinaryReader): NewChannelPostTx;
}

export namespace NewChannelPostTx {
  export type AsObject = {
    version: number,
    owner: string,
    cid: string,
    data: Uint8Array | string,
  }
}

export class SubscribeIdentittyTx extends jspb.Message {
  getStatt(): number;
  setStatt(value: number): void;

  getConversationPubKey(): Uint8Array | string;
  getConversationPubKey_asU8(): Uint8Array;
  getConversationPubKey_asB64(): string;
  setConversationPubKey(value: Uint8Array | string): void;

  getEncryptedMessage(): string;
  setEncryptedMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeIdentittyTx.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeIdentittyTx): SubscribeIdentittyTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeIdentittyTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeIdentittyTx;
  static deserializeBinaryFromReader(message: SubscribeIdentittyTx, reader: jspb.BinaryReader): SubscribeIdentittyTx;
}

export namespace SubscribeIdentittyTx {
  export type AsObject = {
    statt: number,
    conversationPubKey: Uint8Array | string,
    encryptedMessage: string,
  }
}

export class SubscribeChannelTx extends jspb.Message {
  getDeposit(): number;
  setDeposit(value: number): void;

  getSubscriptionPubKey(): Uint8Array | string;
  getSubscriptionPubKey_asU8(): Uint8Array;
  getSubscriptionPubKey_asB64(): string;
  setSubscriptionPubKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeChannelTx.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeChannelTx): SubscribeChannelTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeChannelTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeChannelTx;
  static deserializeBinaryFromReader(message: SubscribeChannelTx, reader: jspb.BinaryReader): SubscribeChannelTx;
}

export namespace SubscribeChannelTx {
  export type AsObject = {
    deposit: number,
    subscriptionPubKey: Uint8Array | string,
  }
}

export class Null extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Null.AsObject;
  static toObject(includeInstance: boolean, msg: Null): Null.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Null, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Null;
  static deserializeBinaryFromReader(message: Null, reader: jspb.BinaryReader): Null;
}

export namespace Null {
  export type AsObject = {
  }
}

export class WrapStr extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WrapStr.AsObject;
  static toObject(includeInstance: boolean, msg: WrapStr): WrapStr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WrapStr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WrapStr;
  static deserializeBinaryFromReader(message: WrapStr, reader: jspb.BinaryReader): WrapStr;
}

export namespace WrapStr {
  export type AsObject = {
    value: string,
  }
}

export class WrapInt extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WrapInt.AsObject;
  static toObject(includeInstance: boolean, msg: WrapInt): WrapInt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WrapInt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WrapInt;
  static deserializeBinaryFromReader(message: WrapInt, reader: jspb.BinaryReader): WrapInt;
}

export namespace WrapInt {
  export type AsObject = {
    value: number,
  }
}

