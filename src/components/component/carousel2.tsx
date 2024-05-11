"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import prod1 from "../../../public/Assets/Blockout Curtains with Swatches/blockout.png"
import { Card, CardContent } from "@/components/ui/card"
import prod2 from "../../../public/Assets/Blockout Curtains with Swatches/IMG_1561.jpg"
import prod3 from "../../../public/Assets/Blockout Curtains with Swatches/IMG_1562.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const featuredproducts = [
    { id: 1, srcimg: prod1, description: "Blockout Curtain Selections" },
    { id: 2, srcimg: prod2, description: "#01 - Cream, #02 - Almond, #03 - Tan" },
    { id: 3, srcimg: prod3, description: "#04 - Butter, #05 - Taupe, #25 - Natural" }
]
export function Carouselcurtain() {
    const plugin = React.useRef(
        Autoplay({ delay: 2500 })
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
