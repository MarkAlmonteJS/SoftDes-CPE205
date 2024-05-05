import { Button } from "@/components/ui/button"
import { Cartsample } from "./cartsamp"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from "react"


export function Sheetcheckout() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Check Cart</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            This is your cart, once you're done you can check out.
          </SheetDescription>
        </SheetHeader>
        <Cartsample />
        <SheetFooter>
          <Button type="submit">Edit Cart</Button>
          <a href="/checkcart" className="check out">
            <Button type="submit">Check out</Button>
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
