'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Banner } from "@/components/component/banner";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"; // Corrected import path
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { firebasedb } from '../../../firebaseconfig';
import { Dialogsamp } from "@/components/component/dialogsamp";

export function Usertab() {
    const [userDetails, setUserDetails] = useState(null); // State to hold user details
    const [transactions, setTransactions] = useState([]);
    const router = useRouter();

    // Function to fetch user details
    const fetchUserDetails = async () => {
        const userId = sessionStorage.getItem('User');
        if (!userId) return;

        const userRef = doc(firebasedb, 'UserList', userId); // Adjust the path to your 'Users' collection
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
            setUserDetails({
                firstName: userSnapshot.data().name,
                lastName: userSnapshot.data().last,
                email: userSnapshot.data().email,
            });
        }
    };

    // Fetch transactions and user details when component mounts
    useEffect(() => {
        fetchTransactions();
        fetchUserDetails();
    }, []);

    // Fetch transactions whenever the component updates
    useEffect(() => {
        fetchTransactions();
    }, [transactions]);

    // Fetch user details whenever the component updates
    useEffect(() => {
        fetchUserDetails();
    }, [userDetails]);

    const fetchTransactions = async () => {
        const userId = sessionStorage.getItem('User');
        if (!userId) return;

        const transactionRef = collection(firebasedb, 'Transaction');
        const snapshot = await getDocs(transactionRef);
        const transactionsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            status: doc.data().status,
        }));

        setTransactions(transactionsData);
    };

    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        Hello!,
                        {userDetails && <span className="text-lg font-bold"> {userDetails.firstName} {userDetails.lastName}</span>}
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
                                <Table className="w-full max-w-md mx-auto">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">Order</TableHead>
                                            <TableHead className="min-w-[150px]">Date</TableHead>
                                            <TableHead className="min-w-[150px]">Status</TableHead>
                                            <TableHead className="text-right">Total</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {transactions.map((transaction, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium">#{transaction.transactionNumber}</TableCell>
                                                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                                                <TableCell style={{ fontWeight: 'bold', color: transaction.status === 'Pending' ? 'orange' : transaction.status === 'Completed' ? 'green' : 'black' }}>
                                                    {transaction.status}
                                                </TableCell>
                                                <TableCell className="text-right">₱{transaction.totalprice.toFixed(2)}</TableCell>
                                                <TableCell className="text-right">
                                                    {/* Example action button */}
                                                    <Button onClick={() => console.log('View Details')}>View</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
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
                                        <CardTitle>Customer Information</CardTitle>
                                        <div className="ml-10">
                                            <Dialogsamp />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                        <div className="grid gap-1">
                                            <div className="font-medium">{userDetails?.firstName} {userDetails?.lastName}</div>
                                            <div>{userDetails?.email}</div>
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
    );
}
