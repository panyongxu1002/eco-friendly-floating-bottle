"use client"

import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useKeylessAccounts } from "../core/useKeylessAccounts";
import { useEffect, useRef, useState } from "react";

const imgs = [
  "https://i.seadn.io/s/raw/files/d5b21e6174ac9c4fb4b46e6365a33284.png?auto=format&dpr=1&w=750",
  "https://i.seadn.io/gae/PwVf0Qngn5QmQaaRtairqM4YAHYMsQNAn4MrquO3sWP0AYdLETvWR4ZLBTWIrttctj4q07L89FAjulEzMFurNac2EkaQC3xBpDjdZw?auto=format&dpr=1&w=750",
  "https://i.seadn.io/s/raw/files/d996b38e56b73bd7cfefeede0e14beb6.png?auto=format&dpr=1&w=750",
  "https://i.seadn.io/gcs/files/915e088fee14fd57704a4bd69b647b50.png?auto=format&dpr=1&w=750",
  "https://i.seadn.io/s/raw/files/b748f1110610eaa68007b7ac494f45ac.png?auto=format&dpr=1&w=750",
  "https://i.seadn.io/s/raw/files/e51669bcb0761a7c2f286a894fdfc8c3.png?auto=format&dpr=1&w=750",
  "https://i.seadn.io/s/raw/files/f946f1667dc74ebf39dcb72b84c17f4a.png?auto=format&dpr=1&w=750",
  "https://i.seadn.io/s/raw/files/f946f1667dc74ebf39dcb72b84c17f4a.png?auto=format&dpr=1&w=750",
  "https://i.seadn.io/s/raw/files/f946f1667dc74ebf39dcb72b84c17f4a.png?auto=format&dpr=1&w=750",
  "https://i.seadn.io/s/raw/files/f946f1667dc74ebf39dcb72b84c17f4a.png?auto=format&dpr=1&w=750",
]

export default function Nfts() {
  const isMounted = useRef(false);

  const { activeAccount } = useKeylessAccounts();
  const [list, setList] = useState<any[]>([]);


  useEffect(() => {
    if (!isMounted.current) {
      setList(generateRandomData(10))
    }
  }, [isMounted.current]);

  return (
    <div className="flex justify-center md:justify-between flex-wrap w-full max-w-[1100px] mx-auto stretch gap-3 min-h-screen">
      {
        list.map((item, idx) => {
          const randomIdx = getRandomInt(10)
          const url = idx > 7 ? imgs[randomIdx] : imgs[idx]
          return (
            <div key={item.address} className="w-[300px]  m-6">
              <Card
                radius="lg"
                className="border-none w-[300px] min-h-[350px]"
              >
                <Image
                  isBlurred
                  width="100%"
                  src={url}
                  alt=""
                />
                <CardFooter className="text-small flex-col">
                  <h1><b>{item.address}</b></h1>
                  <p className="text-default-500">
                    {item.price}
                  </p>
                </CardFooter>

              </Card>
            </div>
          )
        })
      }
    </div>
  );
}

function generateRandomData(length = 10) {
  const data = [];
  for (let i = 0; i < length; i++) {
    const tempObj = {
      // 生成一个随机的十六进制地址
      address: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
      // 生成一个随机的价格，保留两位小数
      price: Math.random() * 10,
    };
    data.push(tempObj);
  }
  return data;
}

function getRandomInt(max = 7) {
  return Math.floor(Math.random() * max);
}