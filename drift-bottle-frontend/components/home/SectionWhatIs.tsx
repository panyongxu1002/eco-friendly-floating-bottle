"use client"

import Image from "next/image"
import { motion } from "framer-motion";
import { Code } from "@nextui-org/code"
import { slideInFromBottom, slideInFromRight, slideInFromTop } from "@/config/motion";
import { title } from "../primitives"

const SectionWhatIs = () => {
  return <>
    <section className="container w-full max-w-[1380px] m-auto  p-8 mt-4">
      <motion.div
        className="max-w-lg flex flex-col justify-center items-center m-auto my-20"
        initial="hidden"
        whileInView="visible"
      >
        <motion.h1 variants={slideInFromTop(0.2)} className={title({ color: "green", size: "md" })}>WHAT IS EFFB</motion.h1>
        <motion.div
          className="my-10 flex flex-col gap-4 relative"
          initial="hidden"
          whileInView="visible"
        >
          <motion.p variants={slideInFromBottom(0.2)}>Eco-friendly Floating Bottle</motion.p>
          <motion.p variants={slideInFromBottom(0.25)}>It is a Web3 rewards social network designed specifically for users and environmental protection. Users from all over the world can earn points by participating in drift bottles.</motion.p>
          <motion.p variants={slideInFromBottom(0.3)}>
            EFFB provides a solution that utilizes Web3 technology to achieve <Code color="secondary">AI, socialization </Code>increased user engagement, and attracts users with a special rewards mechanism to promote <Code color="success">environmental protection</Code>.
          </motion.p>
          {/* <motion.div variants={slideInFromBottom(0.4)}>
            <Image alt="" src="/illustration/bottle2.webp" width={200} height={200} className="absolute -bottom-10 right-[-10px] md:right-[-150px] z-[-10]" />
          </motion.div> */}
        </motion.div>
      </motion.div>
    </section>
  </>
}

export default SectionWhatIs