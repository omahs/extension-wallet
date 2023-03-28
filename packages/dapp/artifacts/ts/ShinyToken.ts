/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  SubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as ShinyTokenContractJson } from "../shiny-token.ral.json";

// Custom types for the contract
export namespace ShinyTokenTypes {
  export type State = Omit<ContractState<any>, "fields">;
}

class Factory extends ContractFactory<ShinyTokenInstance, {}> {
  at(address: string): ShinyTokenInstance {
    return new ShinyTokenInstance(address);
  }

  async testTransferMethod(
    params: Omit<
      TestContractParams<never, { to: HexString; amount: bigint }>,
      "initialFields"
    >
  ): Promise<TestContractResult<null>> {
    return testMethod(this, "transfer", params);
  }
}

// Use this object to test and deploy the contract
export const ShinyToken = new Factory(
  Contract.fromJson(
    ShinyTokenContractJson,
    "",
    "eb751581aa1fc6da7377f792446d49817a6627c1c41b30d1f83cb6ebb57492fa"
  )
);

// Use this class to interact with the blockchain
export class ShinyTokenInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<ShinyTokenTypes.State> {
    return fetchContractState(ShinyToken, this);
  }
}