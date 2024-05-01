/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1gVENB4RBMN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LoginButton } from "@/components/component/loginbutton"

export function Page() {
  return (
    <div className="grid gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
              <header className="border-b">
        <div className="container flex items-center justify-between h-14 px-4 sm:px-6 md:px-10">
          <nav className="hidden font-medium text-sm text-gray-500 sm:flex dark:text-gray-400">
          </nav>
          <Link className="font-bold text-lg md:text-xl dark:text-gray-50 flex items-center" href="/">
          <img src="/Assets/logo2.jpeg" alt="Company Logo" className="h-20 w-auto mt-10" />
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium dark:text-gray-400">
            <Link className="underline-off" href="/">
              Home
            </Link>
            <Link className="underline-off" href="/blinds">
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
      <div className="flex items-center justify-center h-screen"> 
        <Carousel className="w-full max-w-md">
        <CarouselContent>
        <CarouselItem>
        <img
          alt="Curtain 1"
          className="aspect-[3/2] object-cover rounded-lg"
          height="400"
          src="/placeholder.svg"
          width="600"
        />
      </CarouselItem>
            <CarouselItem>
              <img
                alt="Curtain 2"
                className="aspect-[3/2] object-cover rounded-lg"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Curtain 3"
                className="aspect-[3/2] object-cover rounded-lg"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div>
          <h1 className="font-bold text-3xl">Velvet Curtain Panel</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Elevate your space with our luxurious velvet curtain panel.
          </p>
        </div>
        <div className="grid gap-2">
          <div>
            <h3 className="font-semibold text-lg">Dimensions</h3>
            <p className="text-gray-500 dark:text-gray-400">Width: 50 inches, Length: 84 inches</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Material</h3>
            <p className="text-gray-500 dark:text-gray-400">100% polyester velvet</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Care Instructions</h3>
            <p className="text-gray-500 dark:text-gray-400">Machine wash cold, hang or lay flat to dry</p>
          </div>
        </div>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="quantity">
              Quantity
            </Label>
            <Select defaultValue="1" id="quantity">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="size">
              Size
            </Label>
            <RadioGroup defaultValue="50x84" id="size">
              <Label
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="size-50x84"
              >
                <RadioGroupItem id="size-50x84" value="50x84" />
                50 x 84 inches
              </Label>
              <Label
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="size-63x84"
              >
                <RadioGroupItem id="size-63x84" value="63x84" />
                63 x 84 inches
              </Label>
              <Label
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="size-84x84"
              >
                <RadioGroupItem id="size-84x84" value="84x84" />
                84 x 84 inches
              </Label>
            </RadioGroup>
          </div>
          <Button size="lg">Add to Cart</Button>
        </form>
      </div>
    </div>
  )
}

