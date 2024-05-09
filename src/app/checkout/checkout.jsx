'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Banner } from "@/components/component/banner"
import Link from "next/link"
import { Carttable } from "@/components/component/carttable"
import { useEffect, useState } from "react"
import { firebasedb } from "../../../firebaseconfig"
import { getDoc, doc } from "firebase/firestore"

export function Checkout(Products, quantity) {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantities, setQuantities] = useState([]);

    const fetchProductDetails = async (cartItems) => {
        const productPromises = cartItems.map(item => {
            const productRef = doc(firebasedb, "Products", item.productId);
            return getDoc(productRef);
        });

        const productResults = await Promise.all(productPromises);
        const productsData = productResults.map(result => ({
            ...result.data(),
            id: result.id,
        }));


        setProducts(productsData);
        return productsData;
    };

    const fetchCart = async () => {
        const userId = sessionStorage.getItem("User");
        console.log(userId);
        if (!userId) {
            console.error("User not found");
            return;
        }

        const cartRef = doc(firebasedb, "Cart", userId);
        const cartSnap = await getDoc(cartRef);

        if (cartSnap.exists()) {
            const cartData = cartSnap.data();
            setCart(cartData.items); // Set the cart data
            setQuantities(cartData.items);
            console.log("This is the current quantity", quantities);
            setLoading(false);
        } else {
            console.error("No cart found for this user.");
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    useEffect(() => {
        if (cart) {
            fetchProductDetails(cart);
        }
    }, [cart]);
    return (
        <main className="container mx-auto my-12 px-4 md:px-6 lg:px-8">

            <Banner />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-2 lg:col-span-2 mt-10">
                    <h1 className="text-3xl font-bold mb-4">Checkout</h1>
                    <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 font-medium">Your Cart</div>
                        <div className="p-4 space-y-4">
                            <div className="items-center gap-4">
                                <Carttable Products={products} quantity={quantities} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1 mt-10">
                    <div className="border rounded-lg overflow-hidden">
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
                                <Label htmlFor="email">Contact No.</Label>
                                <Input id="mobile" placeholder="Your contact no." type="mobile" />
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
