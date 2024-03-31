// Copyright © Aptos
// SPDX-License-Identifier: Apache-2.0

import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const LocalStorageKeys = {
  keylessAccounts: "@aptos-connect/keyless-accounts",
};

export const devnetClient = new Aptos(
  new AptosConfig({ network: Network.DEVNET })
);

/// FIXME: Put your client id here
export const GOOGLE_CLIENT_ID = "90811893193-m43pbjeo2t899nt9pu1taljinnhc080s.apps.googleusercontent.com";

export const MODULE_ADDRESS = "0x3a42b5651514171bf6544ae04540d560a2460a4a46a3dacd2fee9ecc8e551ce9"