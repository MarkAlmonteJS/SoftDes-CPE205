import { Button } from "@/components/ui/button"
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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
        <Button type="submit">Edit Cart</Button>
            <Button className="check out" href="/checkcart">Check out</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
