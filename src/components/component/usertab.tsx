
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function usertab() {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">

              <span className="">Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">

              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >

                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >

                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >

                Products
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >

                Customers
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >

                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">

            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Recent Orders</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link className="flex items-center gap-2" href="#">

                  Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="flex items-center gap-2" href="#">

                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link className="flex items-center gap-2" href="#">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Button size="icon" variant="outline">

                  <span className="sr-only">Back</span>
                </Button>
                <h1 className="font-semibold text-lg md:text-xl">Your Orders</h1>
              </div>
              <div className="border shadow-sm rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Order</TableHead>
                      <TableHead className="min-w-[150px]">Date</TableHead>
                      <TableHead className="hidden md:table-cell">Items</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#3210</TableCell>
                      <TableCell>June 23, 2022</TableCell>
                      <TableCell className="hidden md:table-cell">2 items</TableCell>
                      <TableCell className="text-right">$120.00</TableCell>
                      <TableCell className="text-right">
                        <Link className="text-blue-600 underline" href="#">
                          View
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#3209</TableCell>
                      <TableCell>May 15, 2022</TableCell>
                      <TableCell className="hidden md:table-cell">3 items</TableCell>
                      <TableCell className="text-right">$149.00</TableCell>
                      <TableCell className="text-right">
                        <Link className="text-blue-600 underline" href="#">
                          View
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#3204</TableCell>
                      <TableCell>April 2, 2022</TableCell>
                      <TableCell className="hidden md:table-cell">1 item</TableCell>
                      <TableCell className="text-right">$64.75</TableCell>
                      <TableCell className="text-right">
                        <Link className="text-blue-600 underline" href="#">
                          View
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#3203</TableCell>
                      <TableCell>March 12, 2022</TableCell>
                      <TableCell className="hidden md:table-cell">1 item</TableCell>
                      <TableCell className="text-right">$34.50</TableCell>
                      <TableCell className="text-right">
                        <Link className="text-blue-600 underline" href="#">
                          View
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#3202</TableCell>
                      <TableCell>February 28, 2022</TableCell>
                      <TableCell className="hidden md:table-cell">2 items</TableCell>
                      <TableCell className="text-right">$89.99</TableCell>
                      <TableCell className="text-right">
                        <Link className="text-blue-600 underline" href="#">
                          View
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Button size="icon" variant="outline">

                  <span className="sr-only">Account</span>
                </Button>
                <h1 className="font-semibold text-lg md:text-xl">Your Account</h1>
              </div>
              <Card>
                <div>
                  <CardHeader className="flex flex-row items-center space-y-0">
                    <CardTitle>Customer</CardTitle>
                    <Link className="text-blue-600 underline ml-auto" href="#">
                      Edit
                    </Link>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="grid gap-1">
                      <div className="font-medium">John Doe</div>
                      <div>johndoe@example.com</div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


