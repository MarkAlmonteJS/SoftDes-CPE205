"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import prod1 from "../../../public/Assets/IMG_9679.jpeg"
import { Card, CardContent } from "@/components/ui/card"
import prod2 from "../../../public/Assets/IMG_9680.jpeg"
import prod3 from "../../../public/Assets/IMG_9681.jpeg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const featuredproducts = [
    { id: 1, srcimg: prod1, description: "Floral Curtain" },
    { id: 2, srcimg: prod2, description: "Gray Curtain" },
    { id: 3, srcimg: prod3, description: "Maroon Curtain" }
]
export function Carouselblinds() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-2xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {featuredproducts.map((item, index) => (
                    <CarouselItem key={item.id}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-0">
                                    <span className="text-4xl font-semibold"></span>
                                    <Image src={item.srcimg} alt="logoimg" width={500} height={500} />
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
