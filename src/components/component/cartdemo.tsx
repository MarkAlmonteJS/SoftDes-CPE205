/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/y6QY5zlYa1z
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function cartdemo() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 px-6 border-b lg:h-[60px] gap-4 dark:border-gray-800">
        <Link className="flex items-center font-semibold text-gray-900 dark:text-gray-100" href="#">

          <span className="">Acme Inc</span>
        </Link>
        <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-4 lg:ml-auto">
          <Link
            className="text-sm rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            Cart
          </Link>
          <Link
            className="text-sm rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Products
          </Link>
          <Link
            className="text-sm rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <Button className="lg:ml-auto" size="sm" variant="outline">
          Logout
        </Button>
      </header>
      <main className="flex-1 p-4 md:p-6 lg:p-8 grid items-start gap-4">
        <div className="grid items-start gap-2">
          <h1 className="font-semibold text-2xl">Your Cart</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Review your items before checking out</p>
        </div>
        <div className="grid items-start">
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden md:table-cell">Image</TableHead>
                  <TableHead className="max-w-[150px]">Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="hidden md:table-cell">
                    <img
                      alt="Product image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">Glimmer Lamps</TableCell>
                  <TableCell>$60.00</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$120.00</TableCell>
                  <TableCell className="w-10 text-right">
                    <Button size="icon" variant="outline">

                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden md:table-cell">
                    <img
                      alt="Product image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">Aqua Filters</TableCell>
                  <TableCell>$16.33</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>$49.00</TableCell>
                  <TableCell className="w-10 text-right">
                    <Button size="icon" variant="outline">

                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Label className="text-sm" htmlFor="coupon">
                Coupon code
              </Label>
              <Input className="w-[200px] max-w-[200px] border" id="coupon" placeholder="Enter coupon code" />
              <Button size="sm">Apply</Button>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex items-center gap-2">
                <div>Subtotal</div>
                <div className="ml-auto">$169.00</div>
              </div>
              <div className="flex items-center gap-2">
                <div>Discount</div>
                <div className="ml-auto">-$19.00</div>
              </div>
              <Separator />
              <div className="flex items-center font-medium">
                <div>Total</div>
                <div className="ml-auto">$150.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button>Checkout</Button>
        </div>
      </main>
    </div>
  )
}


