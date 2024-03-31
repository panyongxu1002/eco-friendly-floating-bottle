"use client"

import BlurCard from "@/components/home/BlurCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    }
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SectionCared = () => {
  return <>
    <section className="container w-full max-w-[1380px] m-auto  p-8 mt-4">
      <motion.ul
        className="flex justify-center md:justify-between flex-wrap gap-10 md:gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.li variants={item}>
          <BlurCard
            imgSrc="/illustration/bottle.jpeg"
            text="Release a floating bottle to earn points and join the environmental protection action together."
          />
        </motion.li>
        <motion.li variants={item}>
          <BlurCard
            imgSrc="/illustration/animals2.webp"
            text="And have a chance to win rare creature NFTs"
          />
        </motion.li>
        <motion.li variants={item}>
          <BlurCard
            imgSrc="/illustration/lvxing.webp"
            text="Environmental protection incentive program starts environmental protection travel."
          />
        </motion.li>
      </motion.ul>
    </section>
  </>
}
export default SectionCared