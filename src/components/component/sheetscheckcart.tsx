import { Button } from "@/components/ui/button"
import { CartTable } from "./cartsamp"
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
import { ShoppingBag } from "lucide-react"


export function Sheetcheckout() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <ShoppingBag size={28} strokeWidth={2} />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-4xl mx-auto sm:max-w-5xl lg:max-w-6xl p-4">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            This is your cart, once you're done you can check out.
          </SheetDescription>
        </SheetHeader>
        <CartTable />
        <SheetFooter>
          <a href="/checkout" className="check out">
            <Button type="submit">Check out</Button>
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
