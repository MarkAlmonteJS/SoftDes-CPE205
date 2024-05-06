'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Banner } from "@/components/component/banner"
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { firebasedb } from '../../../firebaseconfig';



export function Usertab() {

    const [userFirstName, setUserFirstName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // User is signed in, check session storage for user token
                const userToken = sessionStorage.getItem('User');
                if (userToken) {
                    // Fetch user's first name from Firebase
                    const userRef = doc(firebasedb, 'UserList', user.uid);
                    const userSnapshot = await getDoc(userRef);
                    if (userSnapshot.exists()) {
                        setUserFirstName(userSnapshot.data().name);
                        setIsLoggedIn(true);
                        console.log(userFirstName)
                    }
                }
            } else {
                // No user is signed in
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    function handleLogout() {

        sessionStorage.setItem("User", "")
        router.push("/")
    }


    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        Hello!,
                        {isLoggedIn && <span className="text-lg font-bold"> {userFirstName}</span>}
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <Banner />
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="grid gap-6">
                        <div className="grid gap-4">
                            <div className="flex items-center gap-4">
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
        </div>
    )
}


