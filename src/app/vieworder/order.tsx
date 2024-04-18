/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GVKBUq2aA98
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectLabel, SelectTrigger, SelectItem, SelectContent, SelectGroup, Select } from "@/components/ui/select"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Vieworder() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-14 px-4 sm:px-6 md:items-stretch md:flex-row">
          <div className="flex items-center gap-2 md:gap-4">
            <Link className="font-bold" href="#">
              Mikee's Curtain
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link className="font-medium text-sm tracking-wide uppercase md:text-xs" href="#">
              Home
            </Link>
            <Link className="font-medium text-sm tracking-wide uppercase md:text-xs" href="#">
              Catalog
            </Link>
            <Link className="font-medium text-sm tracking-wide uppercase md:text-xs" href="#">
              Contact
            </Link>
            <Link className="font-medium text-sm tracking-wide uppercase md:text-xs" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4 md:gap-2">
            <form className="hidden md:block">
              <div className="flex items-center rounded-full border border-gray-200 dark:border-gray-800">
          
                <Input
                  className="w-40 appearance-none bg-transparent border-none outline-none dark:placeholder-gray-400"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </form>
            <Button className="hidden md:flex" size="sm" variant="outline">
              Login
            </Button>
            <Button className="hidden md:flex" size="sm" variant="outline">
              Sign up
            </Button>
            <Button className="md:hidden" size="icon" variant="outline">

              <span className="sr-only">Toggle cart</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8">
          <div className="grid gap-4 md:col-span-2">
            <div className="rounded-lg overflow-hidden aspect-video">
              <img
                alt="Promo"
                className="object-cover"
                height="360"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "640/360",
                  objectFit: "cover",
                }}
                width="640"
              />
            </div>
            <div className="grid gap-2">
              <h1 className="font-semibold text-2xl">Product name</h1>
              <div className="font-semibold text-2xl">$199.00</div>
              <p className="text-gray-500 dark:text-gray-400">
                Description of the product. It is a very good product and you should buy it.
              </p>
              <form className="grid gap-2 md:flex md:items-center md:gap-4 lg:gap-8">
                <Select>
                  <SelectGroup>
                    <SelectLabel>Color</SelectLabel>
                    <SelectTrigger className="w-[200px] md:w-[auto]" />
                    <SelectContent>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                    </SelectContent>
                  </SelectGroup>
                </Select>
                <Select>
                  <SelectGroup>
                    <SelectLabel>Size</SelectLabel>
                    <SelectTrigger  />
                    <SelectContent>
                      <SelectItem value="s">Small</SelectItem>
                      <SelectItem value="m">Medium</SelectItem>
                      <SelectItem value="l">Large</SelectItem>
                    </SelectContent>
                  </SelectGroup>
                </Select>
                <Button size="lg">Add to cart</Button>
              </form>
            </div>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Product details</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div>
                    <strong>Color:</strong>
                    Black{"\n                                  "}
                  </div>
                  <div>
                    <strong>Material:</strong>
                    Leather{"\n                                  "}
                  </div>
                  <div>
                    <strong>Size:</strong>
                    One size fits all{"\n                                  "}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
      
                      <div className="flex flex-col">
                        <strong>John Doe</strong>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Verified Buyer</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                  
                      </div>
                      <div className="text-sm">
                        <p>
                          This product is amazing. It exceeded my expectations and I would highly recommend it to
                          anyone.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
      
                      <div className="flex flex-col">
                        <strong>Jane Smith</strong>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Verified Buyer</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
               
                      </div>
                      <div className="text-sm">
                        <p>
                          I love this product. It's well-made and looks fantastic. I've been getting compliments on it
                          everywhere I go.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      
                      <div className="flex flex-col">
                        <strong>Mike Johnson</strong>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Verified Buyer</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                      
                      </div>
                      <div className="text-sm">
                        <p>
                          The product is good, but the customer service is outstanding. The company really cares about
                          its customers and goes above and beyond to make sure they're satisfied.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-4 sm:gap-8 sm:grid sm:grid-cols-3 sm:items-start sm:py-6 md:gap-4 lg:gap-0">
          <div className="flex items-center justify-center gap-2 text-center sm:col-start-2 sm:justify-start sm:gap-4">
            <Link className="font-semibold" href="#">
              Home
            </Link>
            <Link className="font-semibold" href="#">
              Catalog
            </Link>
            <Link className="font-semibold" href="#">
              Contact
            </Link>
            <Link className="font-semibold" href="#">
              About
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-center sm:col-start-3 sm:text-left sm:gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">123 Street Name, City, Country</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 Acme Inc. All rights reserved.</p>
          </div>
          <div className="flex justify-center gap-4 text-center sm:col-start-1 sm:justify-end sm:text-right sm:gap-8">
            <Link className="rounded-full border w-8 h-8 dark:border-gray-800" href="#">
          
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="rounded-full border w-8 h-8 dark:border-gray-800" href="#">
              
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="rounded-full border w-8 h-8 dark:border-gray-800" href="#">
             
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

