"use client"

import { useEffect, useRef, useState, useTransition } from "react";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { sleep } from "openai/core";
import { useKeylessAccounts } from "@/app/core/useKeylessAccounts";
import { MODULE_ADDRESS, devnetClient } from "@/app/core/constants";
import { Account, Ed25519PrivateKey } from "@aptos-labs/ts-sdk";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useList } from "@/utils/useList";
import { Bottle } from "./types";
import { Chip } from "@nextui-org/chip";
import { CheckIcon } from "../icons";
import AIGenerateButton from "../AIButton";

const key = '0x74a97ab8746cf5e1c0ad81f7fe52f6b63e84049cf3eafebee016e63e9bc33ac4'
const sponsor = Account.fromPrivateKeyAndAddress({
  privateKey: new Ed25519PrivateKey(key),
  address: MODULE_ADDRESS,
  legacy: true,
});

export const labels = [
  { id: 1, label: '🌤' },
  { id: 2, label: '⛅️' },
  { id: 3, label: '🌊' },
  { id: 4, label: '❄️' },
  { id: 5, label: '⚡️' },
  { id: 6, label: '🌪' },
  { id: 7, label: '🌧' },
]

export default function ThrowBottle() {
  const { activeAccount } = useKeylessAccounts();
  const isMounted = useRef(false)
  const address = activeAccount?.accountAddress.toString() ?? ''

  const { addBottle } = useList()
  const [label, setLabel] = useState(1);
  const [newBottleContent, setNewBottleContent] = useState<string>("");
  const [sending, setSending] = useState(false);

  const [isPending, startTransition] = useTransition()

  const submitTransactionByFree = async (transaction: any) => {
    const senderSignature: any = await devnetClient.transaction.sign({
      signer: activeAccount as any,
      transaction
    });
    // Sponsor signs
    const sponsorSignature = devnetClient.transaction.signAsFeePayer({ signer: sponsor, transaction });

    // Submit the transaction to chain
    const committedTxn = await devnetClient.transaction.submit.simple({
      transaction,
      senderAuthenticator: senderSignature,
      feePayerAuthenticator: sponsorSignature,
    });
    console.log('[ committedTxn ] >', committedTxn)
    return await devnetClient.waitForTransaction({ transactionHash: committedTxn.hash });
  }

  const initAddressList = async () => {
    const transaction = await devnetClient.transaction.build.simple({
      sender: address,
      withFeePayer: true,
      data: {
        function: `${MODULE_ADDRESS}::chat::init_bottle_list`,
        functionArguments: []
      },
    });
    const res = await submitTransactionByFree(transaction);

    return res
  };

  const onWriteBottle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewBottleContent(value);
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      initAddressList()
    }
  }, [initAddressList, isMounted.current]);

  // 发送bottle
  const onSendBottle = async () => {
    setSending(true)
    // await sleep(3000);
    // setSending(false)
    // mock
    // // Bottle
    // const item: any = {
    //   owner: address,
    //   bottle_id: '0x38cfdec97a094cdc30b38a82bd2d73907d860f8382842a6d1ebfcfb73be6dbc7',
    //   content: newBottleContent,
    //   label: label,
    //   star_counter: '0',
    //   reply_counter: "0",
    // }

    // setNewBottleContent("")
    // addBottle(item)
    // alert("success")
    setSending(true)
    const transaction = await devnetClient.transaction.build.simple({
      sender: address,
      withFeePayer: true,
      data: {
        function: `${MODULE_ADDRESS}::chat::create_bottle`,
        functionArguments: [newBottleContent, label]
      },
    });

    try {
      const res = await submitTransactionByFree(transaction).finally(() => {
        setSending(false)
      });
      if (res.hash) {
        setNewBottleContent("")
        startTransition(async () => {
          await sleep(3000)
        })
      } else {
        alert("发送失败")
      }
    } catch (error) {
      alert(JSON.stringify(error))
      console.log('[ error ] >', error)
    }

  };

  return <div>
    <div className="flex flex-col gap-4">
      <Tabs
        aria-label="weather"
        items={labels}
        onSelectionChange={(val) => setLabel(Number(val))}
        className="w-full"
      >
        {(item) => <Tab key={item.id} title={item.label} className="text-2xl" />}
      </Tabs>
      <Textarea
        disabled={sending}
        type="text"
        label=""
        placeholder="🍼 say something..."
        className="w-full"
        variant="bordered"
        value={newBottleContent}
        onChange={onWriteBottle}
      />
      <AIGenerateButton setValue={setNewBottleContent} />
      <Button
        color="success"
        disabled={sending}
        isLoading={sending}
        onClick={() => onSendBottle()}>
        Send
      </Button>
      {
        isPending &&
        <Chip
          startContent={<CheckIcon size={26} />}
          variant="flat"
          color="success"
          classNames={{
            base: "rounded-md h-auto p-2 w-full",
          }}
        >
          <div className="whitespace-pre-wrap">
            Congratulations, you just throw a incredible bottle
          </div>
        </Chip>
      }
    </div>
  </div>
};
