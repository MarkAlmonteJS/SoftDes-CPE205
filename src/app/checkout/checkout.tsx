'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Banner } from "@/components/component/banner"
import Link from "next/link"

export function Checkout() {
    return (
        <main className="container mx-auto my-12 px-4 md:px-6 lg:px-8">

            <Banner />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-2 lg:col-span-2 mt-10">
                    <h1 className="text-3xl font-bold mb-4">Checkout</h1>
                    <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 font-medium">Your Cart</div>
                        <div className="p-4 space-y-4">
                            <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                                <img
                                    alt="Product Image"
                                    className="rounded-md"
                                    height="80"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "80/80",
                                        objectFit: "cover",
                                    }}
                                    width="80"
                                />
                                <div>
                                    <h3 className="font-medium">Gray Curtain</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Size: M, Color: Black</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">170</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Qty: 1</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                                <img
                                    alt="Product Image"
                                    className="rounded-md"
                                    height="80"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "80/80",
                                        objectFit: "cover",
                                    }}
                                    width="80"
                                />
                                <div>
                                    <h3 className="font-medium">Green Curtain</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Size: 3-Pack, Color: Blue</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">300</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Qty: 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1 mt-10">
                    <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 font-medium">Order Summary</div>
                        <div className="p-4 space-y-2">
                            <div className="flex justify-between">
                                <p>Subtotal</p>
                                <p>79.98</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Shipping</p>
                                <p>5.00</p>
                            </div>
                            <div className="flex justify-between font-medium">
                                <p>Total</p>
                                <p>84.98</p>
                            </div>
                        </div>
                    </div>
                    <form className="border rounded-lg overflow-hidden mt-8">
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 font-medium">Shipping & Payment</div>
                        <div className="p-4 space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Enter your name" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Address</Label>
                                <Textarea id="address" placeholder="Enter your address" rows={3} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Enter your email" type="email" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="payment">Payment Method</Label>
                                <Select id="payment">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select payment method" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="credit-card">Credit Card</SelectItem>
                                        <SelectItem value="paypal">PayPal</SelectItem>
                                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex justify-end">
                            <Button size="lg" type="submit">
                                Place Order
                            </Button>
                        </div>
                    </form>
                </div>
                <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-s text-gray-500 dark:text-gray-400">© 2024 Mikee's Curtain. All rights reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link className="text-s hover:underline underline-offset-4" href="/about">
                            About Us
                        </Link>
                        <Link className="text-s hover:underline underline-offset-4" href="/contactus">
                            Contact
                        </Link>
                    </nav>
                </footer>
            </div>
        </main>
    )
}
