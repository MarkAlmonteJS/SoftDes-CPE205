"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import prod1 from "../../../public/Assets/NewClients/IMG_1450.png"
import { Card, CardContent } from "@/components/ui/card"
import prod2 from "../../../public/Assets/NewClients/IMG_1441.png"
import prod3 from "../../../public/Assets/NewClients/IMG_1442.png"
import prod4 from "../../../public/Assets/NewClients/IMG_1443.png"
import prod5 from "../../../public/Assets/NewClients/IMG_1444.png"
import prod6 from "../../../public/Assets/NewClients/IMG_1445.png"
import prod7 from "../../../public/Assets/NewClients/IMG_1446.png"
import prod8 from "../../../public/Assets/NewClients/IMG_1447.png"
import prod9 from "../../../public/Assets/NewClients/IMG_1448.png"
import prod10 from "../../../public/Assets/NewClients/IMG_1454.png"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const featuredproducts = [
  { id: 1, srcimg: prod1, description: "Slide 1 of 10" },
  { id: 2, srcimg: prod2, description: "Slide 2 of 10" },
  { id: 3, srcimg: prod3, description: "Slide 3 of 10" },
  { id: 4, srcimg: prod4, description: "Slide 4 of 10" },
  { id: 5, srcimg: prod5, description: "Slide 5 of 10" },
  { id: 6, srcimg: prod6, description: "Slide 6 of 10" },
  { id: 7, srcimg: prod7, description: "Slide 7 of 10" },
  { id: 8, srcimg: prod8, description: "Slide 8 of 10" },
  { id: 9, srcimg: prod9, description: "Slide 9 of 10" },
  { id: 10, srcimg: prod10, description: "Slide 10 of 10" }
]
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000 })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-2xl"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {featuredproducts.map((item, index) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <Card className="">
                <CardContent className="">
                  <Image src={item.srcimg} alt="logoimg" className="rounded-lg" />
                  <div className="flex flex-col">
                    {item.description}
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
