/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JESZpaDCc2H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Banner } from "@/components/component/banner"

export function Aboutsamp() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Banner />
      <main className="grid gap-4">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10 lg:grid-cols-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                About Mikee's
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Mikee’s - The Curtain Store is a specialized store for home furnishing products, primarily
                curtains and blinds. We also sell pillows, linens, furniture, fixtures, and wall coverings.
                Our first store opened in 1997 in Tutuban Center, Manila. As of 2024, we have 2 stores
                – one in Quezon City, and Manila, Philippines.

              </p>
            </div>
            <div className="mx-auto flex items-center justify-center">
              <img
                alt="Image"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="200"
                src="/placeholder.svg"
                width="400"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">Welcome!</h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Welcome to Mikee’s! We're a store of curtains, blinds, pillows, linens, furniture, lightings,
                home fabrics, wallpapers, rugs, carpets, artificial plants, tablewares, decors, and other
                home improvement items like accordion doors, awnings, glass stickers, and window
                films.</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">Our History</h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Mikee’s, our company, is named after the nickname of our founder’s only daughter. Our
                store opened in 1997 as a creative hobby for our founder, Leni. Combining her passion
                for design with an entrepreneurial spirit, her vision grew beyond a hobby.
                Today, we're a leading manufacturer known for our classic and modern home
                furnishings and textiles. We offer a unique blend of locally made and imported,
                affordable, & luxury products. With two stores in Metro Manila (Manila & Quezon City)
                and a growing portfolio of international projects in Tokyo, Japan, we bring our expertise
                to homes and businesses alike.
                Our commitment remains the same: providing a multitude of products and services at
                wholesale and retail prices.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">Our Team</h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                We're a family-run business, established by our dedicated mother, Leni. Recognizing
                her entrepreneurial spirit, her children – Michael, Mikee, and Miko, joined in to support
                her vision. Together, we bring the strengths of a close-knit family to provide beautifully
                designed and well-made curtains that cater to people from all walks of life.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Mikee's Curtain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/about">
            About Us
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/contactus">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

