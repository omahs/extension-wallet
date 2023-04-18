import { KeyType, Account } from "@alephium/web3"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

import { useAppState } from "../../app.state"
import { selectAccount } from "../../services/backgroundAccounts"
import { recover } from "../recovery/recovery.service"
import { createAccount } from "./accounts.service"
import { importNewLedgerAccount } from '../../services/backgroundAccounts'

export const useAddAccount = () => {
  const navigate = useNavigate()
  const { switcherNetworkId } = useAppState()

  const addAccount = useCallback(async (keyType: KeyType, group?: number) => {
    console.log(`===== addAccount`, switcherNetworkId, keyType)
    const newAccount = await createAccount(switcherNetworkId, keyType, undefined, group)
    // switch background wallet to the account that was selected
    await selectAccount(newAccount)
    navigate(await recover())
  }, [navigate, switcherNetworkId])

  return { addAccount }
}

export const useAddLedgerAccount = (networkId: string) => {
  const addAccount = useCallback(async (account: Account, hdIndex: number ) => {
    console.log(`==== useAddLedger`, networkId, account)
    await importNewLedgerAccount(account, hdIndex, networkId)
    // switch background wallet to the account that was selected
    await selectAccount({ address: account.address, networkId: networkId })
  }, [networkId])

  return { addAccount }
}
