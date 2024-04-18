/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JESZpaDCc2H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Aboutsamp() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="sr-only">Mikee's Curtain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
        </nav>
      </header>
      <main className="grid gap-4">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10 lg:grid-cols-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                About Mikee's
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                We're on a mission to help teams build the best frontend experiences. Our platform provides the tools
                and infrastructure to enable web development teams to innovate and ship faster.
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">Our Mission</h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste, distinctio voluptas modi quibusdam architecto eum in itaque eius debitis. Eius earum totam, repudiandae at nemo recusandae vel ducimus? Eveniet!
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">Our History</h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ipsa veritatis voluptas consequatur ratione unde alias ab dolores! Animi consectetur soluta veniam veritatis velit dolorum quisquam fugit vero, a illo?
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">Meet the Team</h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Our team is made up of experienced web developers, designers, and product managers who are passionate
                about building the best frontend experiences. We are dedicated to helping our customers succeed by
                providing the tools and infrastructure they need to innovate and ship faster.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex gap-4 items-start">
                <img
                  alt="Avatar"
                  className="rounded-lg w-20 overflow-hidden object-cover object-center"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    John is an experienced web developer who has been working in the industry for over 10 years. He is
                    passionate about building fast and beautiful web experiences and is dedicated to helping our
                    customers succeed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <img
                  alt="Avatar"
                  className="rounded-lg w-20 overflow-hidden object-cover object-center"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Jane is a frontend designer who is passionate about creating beautiful and intuitive user
                    interfaces. She has a keen eye for detail and is dedicated to ensuring that our platform provides
                    the best possible experience for our customers.
                  </p>
                </div>
              </div>
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
          <Link className="text-xs hover:underline underline-offset-4" href="about">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

