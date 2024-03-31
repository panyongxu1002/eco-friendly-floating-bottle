import { Bottle } from "@/components/bottles/types";
import { useState } from "react";

// Mock data 

let myCache: any[] = [
  {
    "owner": "0x80e3bb8badc243974476c4c5b2cb960348f7388a62cd83187e27710501a7bb67",
    "bottle_id": "0x38cfdec97a094cdc30b38a82bd2d73907d860f8382842a6d1ebfcfb73be6bbc",
    "content": "中和（carbon neutrality），节能减排术语。一般是指国家、企业、产品、活动或个人在一定时间内直接或间接产生的二氧化碳或温室气体排放总量，通过植树造林、节能减排等形式",
    "label": 1,
    "star_counter": 0,
    "reply_counter": 0
  }
]
let bottlePoolCache: any[] = [
  {
    "owner": "0x80e3bb8badc243974476c4c5b2cb960348f7388a62cd83187e27710501a7bb67",
    "bottle_id": "0x38cfdec97a094cdc30b38a82bd2d73907d860f8382842a6d1ebfcfb73be6bbc",
    "content": "生态环境部：长江生态环境保护修复联合研究取得显著成效",
    "label": 1,
    "star_counter": 0,
    isStar: false,
    "reply_counter": 1
  },
  {
    "owner": "0x80e3bb8badc243974476c4c5b2cb960348f7388a62cd83187e27710501a7bb67",
    "bottle_id": "0x38cfdec97a094cdc30b38a82bd2d73907d860f8382842a6d1ebfcfb73be7fac",
    "content": "京津冀及周边区域：3月下半月，区域北部以优良为主，中南部以良至轻度污染为主，部分时段可能出现短时中度或以上级别污染。",
    "label": 5,
    "star_counter": 1,
    isStar: false,
    "reply_counter": 10
  },
  {
    "owner": "0x80e3bb8badc243974476c4c5b2cb960348f7388a62cd83187e27710501acccc67",
    "bottle_id": "0x38cfdec97a094cdc30b38a82bd2d73907d860f8382842a6d1ebfcfb73be2xdc",
    "content": "中国环境监测总站联合中央气象台、国家大气污染防治攻关联合中心、东北、华南、西南、西北、长三角区域空气质量预测预报中心和北京市生态环境监测中心，开展2024年3月下半月（3月16日—3月31日）全国空气质量预报会商",
    "label": 4,
    "star_counter": 1,
    isStar: false,
    "reply_counter": 3
  }
]
const useList = () => {
  const [list, setList] = useState<any>(() => myCache);
  const [bottlePool, setBottlePool] = useState(() => bottlePoolCache);
  
  const addBottle = (item:any) => {
    setList([item, ...list]);
    myCache = [item, ...list]
  }

  const pickBottle = (bottle_id:any) => {
    const newBottlePool = bottlePoolCache.filter(item => item.bottle_id !== bottle_id)
    bottlePoolCache = newBottlePool
    setBottlePool(newBottlePool)
  }

  const addStar = (bottle_id:string) => { 
    const newList = bottlePoolCache.map((item:Bottle) => {
      if (item.bottle_id == bottle_id) { 
        item.star_counter = +item.star_counter + 1
        item.isStar = true
      }
      return item
    })
    bottlePoolCache = newList
    setBottlePool(newList)
  }

  const removeStar = (bottle_id:string) => { 
    const newList = bottlePoolCache.map((item:Bottle) => {
      if (item.bottle_id == bottle_id) { 
        item.star_counter = +item.star_counter - 1
        item.isStar = false
      }
      return item
    })
    bottlePoolCache = newList
    setBottlePool(newList)
  }

  return {
    list,
    bottlePool,
    addBottle,
    pickBottle,
    removeStar,
    addStar
  }
}

export {
  useList,
}