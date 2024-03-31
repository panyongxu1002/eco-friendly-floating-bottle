"use client"

import { useKeylessAccounts } from "@/app/core/useKeylessAccounts";
import { MODULE_ADDRESS, devnetClient } from "@/app/core/constants";
import { Bottle } from "./types";
import { useEffect, useRef, useState, useTransition } from "react";
import { useList } from "@/utils/useList";
import { labels } from "./ThrowBottle";
import { Code } from "@nextui-org/code";
import { collapseAddress } from "@/app/core/utils";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";

const columns = [
  { name: "Id", uid: "bottle_id" },
  { name: "Label", uid: "label" },
  { name: "Content", uid: "content" },
];

export default function MyBottles() {
  const isMounted = useRef(false)
  const { activeAccount } = useKeylessAccounts();
  const address = activeAccount?.accountAddress.toString() ?? ''
  // mock data
  // const { list } = useList()
  const [list, setList] = useState<Bottle[]>([]);
  const [isPending, startTransition] = useTransition()
  const [environmentalValue, setEnvironmentalValue] = useState<number>(0);

  const fetchList = async () => {
    if (!isMounted.current) return;
    try {
      const todoListResource = await devnetClient.getAccountResource({
        accountAddress: address,
        resourceType: `${MODULE_ADDRESS}::chat::BottleList`
      });
      // tasks table handle
      const tableHandle = (todoListResource as any).bottles.handle;
      // tasks table counter
      const bottleCounter = (todoListResource as any).bottle_counter;

      let bottles: Bottle[] = [];
      let counter = 1;
      while (counter <= bottleCounter) {
        const tableItem = {
          key_type: "u64",
          value_type: `${MODULE_ADDRESS}::chat::Bottle`,
          key: `${counter}`,
        };
        const bottle = await devnetClient.getTableItem<Bottle>({ handle: tableHandle, data: tableItem });
        bottles.push(bottle);
        counter++;
      }
      setList(bottles)
      setEnvironmentalValue(() => {
        if (bottles.length === 0) return 0
        const val = bottles.reduce((res, bt) => {
          res += bt.environmental_value
          return res
        }, 0)
        return val
      })
      return bottles
    } catch (e: any) {
      // setAccountHasList(false);
      return null
    }
  };

  const renderCell = (bottle: any, columnKey: any) => {
    const cellValue = bottle[columnKey];

    switch (columnKey) {
      case "bottle_id":
        return (
          <Code>{cellValue}</Code>
        );
      case "content":
        return (
          <p className="text-bold text-sm capitalize text-default-400">{cellValue}</p>
        );
      case "label":
        return (
          <p className="text-lg">
            <Button
              className="text-4xl"
              variant="light"
              isIconOnly
              size="sm"
            >
              {labels.find(label => label.id == cellValue)?.label}
            </Button>
          </p>
        );
      default:
        return null;
    }
  }

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      startTransition(async () => fetchList() as any)
    }
  }, [isMounted.current])

  return <div className="max-w-4xl">
    <h1 className="flex flex-col gap-2 mb-2">
      Environmental protection points:
      <Skeleton className="min-w-[100px] h-6 rounded-lg" isLoaded={!isPending}>
        <Code color="success" className="w-full">
          {environmentalValue}
        </Code>
      </Skeleton>
    </h1>
    <Table aria-label="myBottle" removeWrapper >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}

      </TableHeader>

      <TableBody items={list}>
        {(item: Bottle) => (
          <TableRow key={item.owner}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    {
      isPending && <div className="max-w-[300px] w-full flex items-center gap-3 py-3">
        <div className="w-full flex flex-col gap-4">
          <Skeleton className="h-6 rounded-lg" />
          <Skeleton className="h-6 rounded-lg" />
          <Skeleton className="h-6 rounded-lg" />
        </div>
      </div>
    }
  </div>
};
