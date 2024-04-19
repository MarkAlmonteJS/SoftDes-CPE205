/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VqZkKt7ikS8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {  CarouselPlugin } from "@/components/component/carousel"
import Image from "next/image"
import logo3 from "../../public/Assets/curtain1.jpg"
import { LoginButton } from "@/components/component/loginbutton"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="border-b">
        <div className="container flex items-center justify-between h-14 px-4 sm:px-6 md:px-10">
          <nav className="hidden font-medium text-sm text-gray-500 sm:flex dark:text-gray-400">
          </nav>
          <Link className="font-bold text-lg md:text-xl dark:text-gray-50" href="#">
            Mikee's Curtain
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium dark:text-gray-400">
            <Link className="underline-off" href="/">
              Home
            </Link>
            <Link className="underline-off" href="#">
              Curtains
            </Link>
            <Link className="underline-off" href="#">
              Blinds
            </Link>
            <Link className="underline-off" href="#">
              Portfolio
            </Link>
            <LoginButton/>
            <Link href={"/signup"}>
            <Button size="sm">Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Beautifully-Designed. Well-made.
              </h1>
              <p className  ="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 line-after">
 Discover our latest collection of beautifully designed curtains. Perfect for adding a touch of sophistication to your home.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
            </div>
          </div>
        </section>
        <section >
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            </div>
            <div className="space-y-1">
            <div className="space-y-1 mx-auto flex justify-center">
              <CarouselPlugin/>
            </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-4 sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Image width={300} height={300}  
                src="https://mandauefoam.ph/cdn/shop/files/121429BayliDuckEggBlackoutCurtain84x95a.png?v=1697088216&width=900"
                 alt="curtain brown"
                 className="aspect-square overflow-hidden rounded-md object-cover object-center"/>
                <div className="space-y-2">
                  <h3 className="font-bold">Crutain 1</h3>
                  <p className="font-semibold">$49.99</p>
                </div>
                <Button size="sm">Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                 <Image width={300} height={300}
                 src="https://cdn11.bigcommerce.com/s-pnuk8o2l3q/images/stencil/1280x1280/products/8880/61001/MUSBMARIN21A_01__35318.1685655215.jpg?c=1"
                 alt="curtain brown"
                 className="aspect-square overflow-hidden rounded-md object-cover object-center"/>
                <div className="space-y-2">
                  <h3 className="font-bold">Curtain 2</h3>
                  <p className="font-semibold">$49.99</p>
                </div>
                <Button size="sm">Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Image height={300} width={300}
                 src="https://linen-shed.com/cdn/shop/files/linenshedphotoBlackoutcurtain_740x.png?v=1689923466"
                 alt="curtain brown"
                 className="aspect-square overflow-hidden rounded-md object-cover object-center"/>  
                <div className="space-y-2">
                  <h3 className="font-bold">Curtain 3</h3>
                  <p className="font-semibold">$49.99</p>
                </div>
                <Button size="sm">Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  alt="Image"
                  className="aspect-square overflow-hidden rounded-md object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Curtain 4</h3>
                  <p className="font-semibold">$49.99</p>
                </div>
                <Button size="sm">Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  alt="Image"
                  className="aspect-square overflow-hidden rounded-md object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Curtain 5</h3>
                  <p className="font-semibold">$49.99</p>
                </div>
                <Button size="sm">Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  alt="Image"
                  className="aspect-square overflow-hidden rounded-md object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">Curtain 6</h3>
                  <p className="font-semibold">$49.99</p>
                </div>
                <Button size="sm">Add to Cart</Button>
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
          <Link className="text-s hover:underline underline-offset-4" href="about">
            FAQs
          </Link>
        </nav>
      </footer>
    </div>
  )
}

