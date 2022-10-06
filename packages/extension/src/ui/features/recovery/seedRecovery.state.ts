import { wordlists } from "ethers"
import create from "zustand"

import { bip39Words } from "./bip39"

interface State {
  seedPhrase?: string
  password?: string
}

const allowedWords = bip39Words.split(" ")

export const useSeedRecovery = create<State>(() => ({}))

export const validateSeedPhrase = (seedPhrase: string): boolean => {
  const words = wordlists.en.split(seedPhrase)
  // check seed phrase has correct number of words and every word is in the wordlist
  return words.length !== 24 ? false : words.every((word) => allowedWords.indexOf(word) >= 0)
}

export const validatePassword = (password: string): boolean => password.length > 5

export const validateAndSetSeedPhrase = (seedPhrase: string): void => {
  if (!validateSeedPhrase(seedPhrase)) {
    throw new Error("Invalid seed phrase")
  }
  return useSeedRecovery.setState({ seedPhrase })
}

export const validateAndSetPassword = (password: string): void => {
  if (!validatePassword(password)) {
    throw new Error("Invalid password")
  }
  return useSeedRecovery.setState({ password })
}

export const validateSeedRecoveryCompletion = (
  state: State,
): state is Required<State> =>
  Boolean(
    state.seedPhrase &&
      state.password &&
      validateSeedPhrase(state.seedPhrase) &&
      validatePassword(state.password),
  )
