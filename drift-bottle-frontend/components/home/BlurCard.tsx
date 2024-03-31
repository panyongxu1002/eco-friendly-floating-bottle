import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FC } from "react";

type BlurCardProps = {
  imgSrc: string;
  text: string;
}
const BlurCard: FC<BlurCardProps> = ({ imgSrc, text }) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      shadow="lg"
      className="border-none max-h-[300px]"
    >
      <Image
        alt="bottle"
        className="object-cover"
        height={400}
        width={400}
        src={imgSrc}
      />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-3 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-white/90">{text}</p>
      </CardFooter>
    </Card>
  )
}

export default BlurCard