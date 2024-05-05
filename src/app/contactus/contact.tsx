/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GVdJIO9V0kQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Banner } from "@/components/component/banner"

export function Contactus() {
  return (
    <div className="w-full py-12">
      <Banner />
      <div className="container grid max-w-3xl px-4 gap-10 md:gap-8 lg:grid-cols-2 lg:px-10 xl:max-w-5xl mt-20">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact us</h1>
            <p className="text-gray-500 dark:text-gray-400">We'll get back to you as soon as possible.</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter the subject" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
            <Button>Send message</Button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Contact information</h3>
              <p className="text-gray-500 dark:text-gray-400">Reach out to us using the information below.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">

                <div className="space-y-1">
                  <h4 className="font-semibold">Email</h4>
                  <p>mikeescurtains@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">

                <div className="space-y-1">
                  <h4 className="font-semibold">Call us</h4>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">

                <div className="space-y-1">
                  <h4 className="font-semibold">Address</h4>
                  <p>Tutuban Center, 2nd Flr., Prime Block Bldg, Recto Ave, Tondo, Manila, 1012 Metro Manila</p>
                  <div>
                    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-1 border-t">
                      <p className="text-s text-gray-500 dark:text-gray-400">© 2024 Mikee's Curtain. All rights reserved.</p>
                      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link className="text-xs hover:underline underline-offset-4" href="/about">
                          About Us
                        </Link>
                        <Link className="text-xs hover:underline underline-offset-4" href="/contact">
                          Contact
                        </Link>
                      </nav>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


