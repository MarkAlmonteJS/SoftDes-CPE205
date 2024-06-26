"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VqZkKt7ikS8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CarouselPlugin } from "@/components/component/carousel"
import Image from "next/image"
import { useEffect, useState } from "react"
import { firebasedb } from "../../firebaseconfig"
import { Sheetcheckout } from "@/components/component/sheetscheckcart";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/component/dropdown-menu"
import { Banner } from "@/components/component/banner";
import { Accordionclients } from "@/components/component/accordionclients";


// Define the type of the document data
interface ProductSchema {
  Image: string;
  name: string;
  price: number;
  quantity: number;
  tags: string[];
  // Add other properties as needed
}


export default function Mainpage() {

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Banner />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Beautifully-Designed. Well-made.
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 line-after">
                Discover our latest collection of beautifully designed curtains. Perfect for adding a touch of sophistication to your home.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">

            </div>
          </div>
        </section>
        <section >
          <div className="container grid items-center gap-1 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            </div>
            <div>
              <div className="space-y-1 mx-auto flex justify-center">
                <CarouselPlugin />
              </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 line-after mb-8">
                For over 27 years, we have brought beautifully designed and well-made home furnishing products to homes and offices nationwide and even internationally. We specialize in customizing curtains, blinds, and furniture that will suit your style and space. Ready to see the Mikee's difference? Browse our photo gallery for a glimpse of our beautifully designed and well-made projects, expertly crafted to last.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover our Clients</h2>
            </div>
            <div>
              <p>
                Operating for more than two decades, our company has furnished and decorated
                a wide range of real estate properties starting from the most accessible to the most
                exclusive, both locally and internationally. Listed are several of these residential,
                commercial, and mixed-use properties we have done to date.

              </p>
              <div>
                <Accordionclients />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-s text-gray-500 dark:text-gray-400">© 2024 Mikee's Curtain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-s hover:underline underline-offset-4" href="/about">
            About Us
          </Link>
          <Link className="text-s hover:underline underline-offset-4" href="/contactus">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

