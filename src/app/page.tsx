"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VqZkKt7ikS8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CarouselPlugin } from "@/components/component/carousel"
import Image from "next/image"
import { useEffect, useState } from "react"
import { firebasedb } from "../../firebaseconfig"
import { Sheetcheckout } from "@/components/component/sheetscheckcart";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/component/dropdown-menu"
import { Banner } from "@/components/component/banner";


// Define the type of the document data
interface ProductSchema {
  Image: string;
  name: string;
  price: number;
  quantity: number;
  tags: string[];
  // Add other properties as needed
}


export default function Component() {
  const [documents, setDocuments] = useState([]);


  async function fetchDocumentData() {
    const docRef = doc(firebasedb, "Products", "F9siixXgPweWXiti5o9Z");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      // console.log("fetch from fetch document",data)
      //console.log("image",data.Image)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }
  async function fetchDocumentTable() {
    const productsCollectionRef = collection(firebasedb, "Products");
    const querySnapshot = await getDocs(productsCollectionRef);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      // You can process each document here as needed
    });
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Banner />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Beautifully-Designed. Well-made.
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 line-after">
                Discover our latest collection of beautifully designed curtains. Perfect for adding a touch of sophistication to your home.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">

            </div>
          </div>
        </section>
        <section >
          <div className="container grid items-center gap-1 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            </div>
            <div>





            </div>



            <div className="space-y-1">
              <div className="space-y-1 mx-auto flex justify-center">
                <CarouselPlugin />
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-4 sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center space-y-2">
                {documents.map((document, id) => (
                  <div key={id} className="flex flex-col items-center justify-center space-y-2">
                    <Image width={300} height={300}
                      src={document.Image} // Adjust based on your data structure
                      alt="curtain brown"
                      className="aspect-square overflow-hidden rounded-md object-cover object-center" />
                    <div className="space-y-2">
                      <h3 className="font-bold">{document.name}</h3> { }
                      <p className="font-semibold">${document.price}</p> { }
                    </div>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Image width={300} height={300}
                  src="https://cdn11.bigcommerce.com/s-pnuk8o2l3q/images/stencil/1280x1280/products/8880/61001/MUSBMARIN21A_01__35318.1685655215.jpg?c=1"
                  alt="curtain brown"
                  className="aspect-square overflow-hidden rounded-md object-cover object-center" />
                <div className="space-y-2">
                  <h3 className="font-bold">Curtain 2</h3>
                  <p className="font-semibold">$49.99</p>
                </div>
                <Button size="sm">Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Image height={300} width={300}
                  src="https://www.ikea.com/ph/en/images/products/raecka-hugad-double-curtain-rod-combination-black__0893018_pe569528_s5.jpg?f=s"
                  alt="curtain brown"
                  className="aspect-square overflow-hidden rounded-md object-cover object-center" />
                <div className="space-y-2">
                  <h3 className="font-bold">Curtain 3</h3>
                  <p className="font-semibold">$49.99</p>
                </div>
                <Button size="sm">Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  alt="Image"
                  className="aspect-square overflow-hidden rounded-md object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
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
  )
}

