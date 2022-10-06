import { AddressBalance } from '@alephium/sdk/api/explorer'

import { AddressAndPublicKey } from '../addresses'

export type AddressMessage =
  | { type: 'NEW_ADDRESS'; data?: number }
  | {
      type: 'NEW_ADDRESS_RES'
      data: AddressAndPublicKey
    }
  | { type: 'NEW_ADDRESS_REJ'; data: { error: string } }
  | { type: 'DISCONNECT_ADDRESS' }
  | { type: 'CONNECT_ADDRESS'; data: AddressAndPublicKey }
  | { type: 'GET_ADDRESSES'; data?: { showHidden: boolean } }
  | { type: 'GET_ADDRESSES_RES'; data: AddressAndPublicKey[] }
  | { type: 'GET_DEFAULT_ADDRESS' }
  | {
      type: 'GET_DEFAULT_ADDRESS_RES'
      data?: AddressAndPublicKey
    }
  | { type: 'GET_ADDRESS_BALANCE'; data: { address: string } }
  | {
      type: 'GET_ADDRESS_BALANCE_RES'
      data: AddressBalance
    }
  | { type: 'GET_ADDRESSES_BALANCE'; data: { addresses: string[] } }
  | {
      type: 'GET_ADDRESSES_BALANCE_RES'
      data: AddressBalance[]
    }
  | { type: 'DELETE_ADDRESS'; data: { address: string } }
  | { type: 'DELETE_ADDRESS_RES' }
  | { type: 'DELETE_ADDRESS_REJ' }
  | {
      type: 'GET_ENCRYPTED_SEED_PHRASE'
      data: { encryptedSecret: string }
    }
  | {
      type: 'GET_ENCRYPTED_SEED_PHRASE_RES'
      data: { encryptedSeedPhrase: string }
    }
