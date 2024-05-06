"use client"
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1Bvw9WX11pC
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { firebasedb, app } from "../../../firebaseconfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, doc, setDoc, } from "firebase/firestore";
import { useState, useEffect } from "react"

const auth = getAuth(app)


interface iUser {
  name: string;
  email: string;
  last: string;
  type: string;
  mobile: string;

}


export function Signup() {

  const [userData, setuserdata] = useState<iUser>({
    name: '',
    email: '',
    last: '',
    type: '',
    mobile: '',


  });

  const [firstName, setfn] = useState("")
  const [lastName, setln] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [mobile, setmobile] = useState("")


  const handleRegister = async (event: any) => {
    event.preventDefault();

    try {
      // User registration with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Register Successful");
      console.log("User Registered with: ", userCredential.user.uid);

      // Prepare the data to store
      const userData: iUser = {
        name: firstName,
        email: email,
        last: lastName,
        type: 'User',
        mobile: mobile,
      };

      // Define the collections
      const userListCollection = collection(firebasedb, 'UserList');
      const cartCollection = collection(firebasedb, 'Cart');

      // Add the document to the UserList collection and get the auto-generated ID
      const newUserRef = await addDoc(userListCollection, userData);

      // Create a new Cart document for the user using the user's UID as the document name
      const newCartData = {
        Cartno: 1,
        Status: "active",
        items: [],
        totalitem: 0,
        totalprice: 0,
      };

      // Correctly create the Cart document using the user's UID as the document name
      await setDoc(doc(firebasedb, 'Cart', userCredential.user.uid), {
        ...newCartData,
        userId: userCredential.user.uid, // Store the user's UID in the Cart document
      });

      console.log('User added with ID:', newUserRef.id);
      alert("User successfully Registered Proceed to sign in"); // Consider updating this message if relevant
    } catch (error) {
      console.error("Error adding admin or registering user: ", error);
      alert('Failed to register. Please try again.');
    }
  };



  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="border-b">
        <div className="container flex items-center justify-between h-14 px-4 sm:px-6 md:px-10">
          <nav className="hidden font-medium text-sm text-gray-500 sm:flex dark:text-gray-400">
          </nav>
          <nav className="flex items-center gap-4 text-sm font-medium dark:text-gray-400">
            <Link className="underline-off" href="/">
              Home
            </Link>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-sm space-y-6">
        <div className="flex flex-col items-center mt-10">
          <img src="/Assets/logo2.jpeg" alt="Company Logo" className="h-20 w-auto mb-4" />
          <h1 className="text-4xl font-bold mt-10">Mikee's Curtain</h1>
        </div>
        <div className="tx-5 space-y-2 text-center">
          <h2 className="text-3xl font-bold">Sign Up</h2>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              placeholder="Enter your First name"
              value={firstName}
              onChange={e => setfn(e.target.value)} // uses to change the value of first name
              type="text"
              required />
          </div>
          <div>
            <Label htmlFor="lastName" className="">Last Name</Label>
            <Input
              id="lastname"
              placeholder="Enter your Last name"
              value={lastName}
              onChange={e => setln(e.target.value)} // uses to change the value of first name
              type="text"
              required />
          </div>
          <div>
            <Label htmlFor="mobile">Mobile no.</Label>
            <Input
              id="mobile"
              placeholder="eg. 0924..."
              type="mobile"
              value={mobile}
              onChange={e => setmobile(e.target.value)}
              required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setemail(e.target.value)} // uses to change the value of first name
              type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Type your password"
              type="password"
              value={password}
              onChange={e => setpassword(e.target.value)}
              required />
          </div>
          <Button onClick={handleRegister} className="w-full">Sign Up</Button>

          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link className="underline" href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}