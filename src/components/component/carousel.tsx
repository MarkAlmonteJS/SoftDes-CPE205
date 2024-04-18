"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import logo from "../../../public/Assets/logo1.jpeg"
import { Card, CardContent } from "@/components/ui/card"
import logo2 from "../../../public/Assets/services-measure.jpg"
import logo3 from "../../../public/Assets/curtain1.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const featuredproducts = [
  { id:1, srcimg : logo , description:"Company Logo" } ,
  { id:2, srcimg : logo2, description:"Sample1"} ,
  { id:3, srcimg : logo3, description:"Brown Curtain"}
]
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
      {featuredproducts.map((item, index) => (
 <CarouselItem key={item.id}>
    <div className="p-1">
      <Card>
        <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold"></span>
          <Image src={item.srcimg} alt="logoimg" width={150} height={150}/>
          <div className="flex flex-col">
            {item.description }
          </div>
        </CardContent>
      </Card>
    </div>
 </CarouselItem>
))}

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
