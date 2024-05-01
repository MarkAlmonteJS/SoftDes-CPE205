"use client"
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/iicTBSAQS4Y
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {firebasedb, app} from "../../../firebaseconfig"
import {getAuth , signInWithEmailAndPassword} from "firebase/auth"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const auth = getAuth(app)


export function Loginpage() {
  const router= useRouter()

  const handleSubmit = async (event:any) => {
    event.preventDefault();
  
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login Successful");
        console.log("User Logged In with: ",userCredential);
        console.log("User Logged In with: ",userCredential.user.uid);
      sessionStorage.setItem("User",userCredential.user.uid)
        router.push("/loginedpage");
    } catch (error) {
        console.log("User Not Registered");
    }
  };

  
const [email, setemail] = useState ("")
const [password, setpassword] = useState ("")

  
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
    <div className="flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[400px] mx-auto space-y-8">
      <div className="flex flex-col items-center mt-10">
  <img src="/Assets/logo2.jpeg" alt="Company Logo" className="h-20 w-auto mb-4" />
  <h1 className="text-4xl font-bold mt-10">Mikee's Curtain</h1>
  <p className="text-gray-500 dark:text-gray-400">Welcome back!</p>
</div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
            id="email"
            placeholder="@example.com"
            value={email}
            onChange={e => setemail(e.target.value)} // uses to change the value of first name
            type="text"
            required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
             id="password"
             placeholder="Enter your password"
             value={password}
             onChange={e => setpassword(e.target.value)} // uses to change the value of first name
             type="password"
             required />
          </div>
          <Button  onClick={handleSubmit} className="w-full">Login</Button>
        </div>
        <div className="space-y-2 text-center">
          <Link className="text-sm underline" href="#">
            Forgot your password?
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
            Don't have an account?
            <Link className="underline" href="signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
