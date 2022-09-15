import produce from 'immer'
import create from 'zustand'
import { persist } from 'zustand/middleware'

export const defaultAddressName = 'Unnamed Address'

type AddressMetadata = {
  name: string
  color: string
}

interface State {
  metadata: { [addressHash: string]: AddressMetadata }
  setAddressMetadata: (addressHash: string, addressMetadata: Partial<AddressMetadata>) => void
}

export const useAddressMetadata = create<State>(
  persist(
    (set) => ({
      metadata: {},
      setAddressMetadata: (addressHash: string, addressMetadata: Partial<AddressMetadata>) =>
        set(
          produce<State>((state) => {
            state.metadata[addressHash] = { ...state.metadata[addressHash], ...addressMetadata }
          })
        )
    }),
    { name: 'addressMetadata' }
  )
)

export const getAddressName = (address: string, metadata: State['metadata']): string =>
  metadata[address].name || defaultAddressName

export const setDefaultAddressNames = (addresses: string[]) => {
  const { metadata } = useAddressMetadata.getState()

  const metadataWithWissingNames = Object.entries(metadata).reduce<{ [hash: string]: AddressMetadata }>((acc, m) => {
    if (!m[1].name) {
      return { ...acc, [m[0]]: { ...m[1], name: `Address ${addresses.indexOf(m[0]) + 1}` } }
    } else {
      return acc
    }
  }, {})

  useAddressMetadata.setState({ metadata: metadataWithWissingNames })
}
