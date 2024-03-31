"use client"

import { useList } from "@/utils/useList";
import { labels } from "./ThrowBottle";
import { Code } from "@nextui-org/code";
import { CiStar } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { collapseAddress } from "@/app/core/utils";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Bottle } from "./types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

export default function PickBottle() {
  const { bottlePool, addStar, removeStar } = useList()

  return <div className="w-full max-w-7xl flex flex-wrap gap-4 justify-center">
    {
      bottlePool.map((item: Bottle, idx) => {
        return <Card className="max-w-[340px]" key={idx}>
          <CardHeader className="justify-between gap-4">
            <div className="flex gap-5">
              <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">Owner</h4>
                <h5 className="text-small tracking-tight text-default-400">
                  {collapseAddress(item.bottle_id)}
                </h5>
              </div>
            </div>
            <Button
              className="text-4xl"
              color="success"
              variant="light"
              isIconOnly
              size="sm"
            >
              {labels.find(label => label.id === item.label)?.label}
            </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>{item.content}</p>
          </CardBody>
          <CardFooter className="gap-3 justify-end">
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-default-400 text-small">{item.star_counter}</p>
              <Button
                // className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                color="success"
                variant="light"
                isIconOnly
                size="sm"
                // variant={isFollowed ? "bordered" : "solid"}
                onPress={() => {
                  if (item.isStar) {
                    removeStar(item.bottle_id)
                  } else {
                    addStar(item.bottle_id)
                  }
                }}
              >
                {
                  item.isStar
                    ? <FaStar size={24} />
                    : <CiStar size={22} />
                }
              </Button>
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-default-400 text-small">{item.reply_counter}</p>
              <Button
                color="success"
                variant="light"
                size="sm"
                isIconOnly
              >
                <FaRegCommentDots size={20} />
              </Button>
            </div>
          </CardFooter>
        </Card>
      })
    }
  </div>
};
