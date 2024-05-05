"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/component/dropdown-menu"
import { Sheetcheckout } from "./sheetscheckcart"
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { firebasedb } from '../../../firebaseconfig';


export function Banner() {
    const [userFirstName, setUserFirstName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Check session storage for user token
                const userToken = sessionStorage.getItem('User');
                if (userToken) {
                    // Fetch user's first name from Firebase
                    const userRef = doc(firebasedb, 'UserList', user.uid);
                    const userSnapshot = await getDoc(userRef);
                    if (userSnapshot.exists()) {
                        setUserFirstName(userSnapshot.data().name);
                        setIsLoggedIn(true);
                    }
                } else {
                    // If no user token is found, consider as not logged in
                    setIsLoggedIn(false);
                }
            } else {
                // No user is signed in
                setIsLoggedIn(false);
            }
        });

        // Additional check for session storage on component mount
        const storedUserId = sessionStorage.getItem('User');
        if (storedUserId) {
            const userRef = doc(firebasedb, 'UserList', storedUserId);
            getDoc(userRef).then((userSnapshot) => {
                if (userSnapshot.exists()) {
                    setUserFirstName(userSnapshot.data().name);
                    setIsLoggedIn(true);
                }
            });
        }

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);
    function handleLogout() {

        sessionStorage.setItem("User", "")
        router.push("/login")

    }

    return (

        <header className="border-b">
            <div className="container flex items-center justify-between h-14 px-4 sm:px-6 md:px-10">
                <nav className="hidden font-medium text-sm text-gray-500 sm:flex dark:text-gray-400">
                </nav>
                <Link className="font-bold text-lg md:text-xl dark:text-gray-50 flex items-center" href="/">
                    <img src="/Assets/logo2.jpeg" alt="Company Logo" className="h-20 w-auto mt-10" />
                </Link>
                <nav className="flex items-center gap-4 text-sm font-medium dark:text-gray-400">
                    <Link className="underline-off" href="/">
                        Home
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size='sm'
                            >
                                Shop
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Link href="/blinds">Blinds
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/curtains">Curtains
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/rods">Curtain Rod
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="">
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="fixed top-2 right-2 m-4 z-50">
                        <Sheetcheckout />
                    </div>
                    {isLoggedIn ? (
                        <>
                            <Link href="/user" className="link-style">
                                <span>{userFirstName}</span>
                            </Link>
                            , Welcome back!

                            <Button size="sm" onClick={handleLogout}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Link href={"/login"}>
                                <Button size="sm">Login</Button>
                            </Link>
                            <Link href={"/signup"}>
                                <Button size="sm">Sign Up</Button>
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}