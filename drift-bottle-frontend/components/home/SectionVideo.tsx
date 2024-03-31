"use client"

import { Button } from "@nextui-org/button";
import { GiHeartBottle } from "react-icons/gi";
import { motion } from "framer-motion";
import { title, subtitle } from "@/components/primitives";
import { slideInFromLeft, slideInFromRight } from "@/config/motion";
import Link from "next/link";

const SectionVideo = () => {
  return <>
    <div className="relative h-screen max-h-[1000px] w-full min-h-[500px] lg:min-h-[600px]">
      <video
        className="relative z-1 h-full w-full object-cover transition-opacity duration-300 pointer  visible opacity-100 -mt-16 pointer-events-none"
        aria-hidden="true"
        muted={true}
        autoPlay={true}
        loop={true}
      >
        <source src="/videos/homeVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-1000 flex bg-[rgba(0,0,0,0.56)]">
        <div className="container w-full max-w-[1280px] m-auto  p-8 overflow-hidden">
          <section className="flex flex-col items-center justify-center gap-4">
            <motion.div
              className="inline-block w-full justify-center mix-blend-difference"
              initial="hidden"
              whileInView="visible"
            >
              <motion.h1
                variants={slideInFromLeft()}
              >
                <div className={title({ color: "green", size: "xl" })}>
                  Green Earth&nbsp;
                </div>
              </motion.h1>
              <br />
              <motion.h2 variants={slideInFromLeft(0.3)} className={subtitle()}>
                WEB3 and Environmental Protection
              </motion.h2>
              <motion.h2 variants={slideInFromLeft(0.4)} className={subtitle()}>
                Protecting the blue sky, clear water, and green land together.
              </motion.h2>
            </motion.div>
          </section>
          <section className="flex justify-end my-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="flex flex-col gap-4"
            >
              <motion.div variants={slideInFromRight()}>
                Send a message in a bottle
                <br />to find environmental partners
              </motion.div>
              <motion.div variants={slideInFromRight(0.3)}>
                <Button
                  variant="shadow"
                  color="success"
                  fullWidth
                  startContent={<GiHeartBottle size={30} />}
                  as={Link}
                  href="/bottles"
                >
                  Send Now
                </Button>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  </>
}
export default SectionVideo;