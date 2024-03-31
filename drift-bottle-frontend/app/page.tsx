"use client"

import Image from "next/image";
import { GiHeartBottle } from "react-icons/gi";
import { Button } from "@nextui-org/button";

import { title, subtitle } from "@/components/primitives";
import ParallaxText from "@/components/home/ParallaxText";
import SectionWhatIs from "@/components/home/SectionWhatIs";
import SectionCared from "@/components/home/SectionCard";
import SectionVideo from "@/components/home/SectionVideo";


export default function Home() {
	return (
		<>
			<SectionVideo />
			<div className="mt-16">
				<ParallaxText baseVelocity={-2}>
					<div className="grid items-center">
						<GiHeartBottle size={45} color="#1eb25e" />
						<span className="pt-1">EFFB</span>
					</div>
					<div className="w-[170px]">
						<Image src="https://aptos.dev/img/aptos_word_dark.svg" alt="" width={100} height={90} className="w-auto h-[54px]" />
					</div>
					<div className="w-[200px]">
						<Image src="https://openbuild.xyz/_next/static/media/logo-black.41be43e7.svg" alt="" width={170} height={30} className="w-auto h-[54px]" />
					</div>
				</ParallaxText>
			</div>
			<SectionWhatIs />
			<SectionCared />
			<section className="container w-full max-w-[1380px] m-auto  p-8 mt-4">
				<div className="flex justify-end items-center relative">
					<div className="flex flex-col items-end gap-4">
						<h2 className={title({ color: "green", size: "xsm" })}>Your participation can make a difference.</h2>
						<h2 className={title({ color: "green", size: "xsm" })}>Let&apos;s contribute to environmental protection together.</h2>
						<Button
							variant="shadow"
							color="success"
							startContent={<GiHeartBottle size={30} />}
						>
							Send a Bottle Right Now
						</Button>
					</div>
					<Image src="/illustration/bird.webp" alt="" width={220} height={220} className="relative right-8 z-[-8]" />
					<Image src="/illustration/green-land.webp" alt="" width={300} height={300} className="absolute right-0 -bottom-20 z-[-10]" />
				</div>
			</section>
		</>
	);
}
