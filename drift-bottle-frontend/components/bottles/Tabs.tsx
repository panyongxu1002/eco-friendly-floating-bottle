"use client"

import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";;
import { useKeylessAccounts } from "@/app/core/useKeylessAccounts";
import ThrowBottle from "./ThrowBottle";
import MyBottles from "./MyBottles";
import PickBottle from "./PickBottle";
import Image from "next/image";


const tabs = [
  {
    id: "throw",
    label: "Throw a bottle",
    component: <ThrowBottle />,
  },
  {
    id: "pick",
    label: "Bottles Pool",
    component: <PickBottle />,
  },
  {
    id: "myBottle",
    label: "My bottles",
    component: <MyBottles />,
  }
];

export default function BottleTabs() {
  const { activeAccount } = useKeylessAccounts();
  if (!activeAccount) return (
    <div className="w-full h-full flex">
      <div className="m-auto">
        <Image src="/images/waiting.png" width={250} height={250} alt="" />
        <h1 className="text-lg bolder">Please Login With your Google Accout</h1>
      </div>
    </div>
  )
  return (
    <div className="w-full">
      <Tabs items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {
                  item.component
                }
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div >
  );
}
