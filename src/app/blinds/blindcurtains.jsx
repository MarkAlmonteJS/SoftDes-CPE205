"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VqZkKt7ikS8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { doc, setDoc, getDoc, collection, getDocs, updateDoc } from "firebase/firestore";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CarouselPlugin } from "@/components/component/carousel"
import Image from "next/image"
import { useEffect, useState } from "react"
import { firebasedb } from "../../../firebaseconfig"
import { Sheetcheckout } from "@/components/component/sheetscheckcart";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/component/dropdown-menu"
import { Banner } from "@/components/component/banner";



export default function BlindsPage() {
  const [documents, setDocuments] = useState([]);




  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(firebasedb, "Products"));
      const documents = querySnapshot.docs
        .map(doc => ({ ...doc.data(), id: doc.id }))
        .filter(product => product.type === 'blinds'); // Filter documents where type is 'blinds'

      // Log the image URLs of all blinds products
      documents.forEach(product => {
        console.log("Image URL of product:", product.Image);
      });

      setDocuments(documents);
    };

    fetchDocuments();
  }, []);

  const addToCart = async (productId) => {
    console.log('Adding to cart:', productId); // Debug log
    const userId = sessionStorage.getItem("User");
    console.log('User ID:', userId); // Debug log

    // Get the current user's cart document
    const cartRef = doc(firebasedb, "Cart", userId);
    const cartSnapshot = await getDoc(cartRef);
    console.log('Cart snapshot:', cartSnapshot); // Debug log

    if (!cartSnapshot.exists()) {
      await setDoc(cartRef, {
        items: [productId],
        totalitem: 1, // Initialize total to 1 since we're adding the first item
        totalprice: 0, // Initialize total price to 0
      });
      console.log('Cart created or updated with new item:', productId);
    } else {
      const cartData = cartSnapshot.data();
      const itemsArray = Array.isArray(cartData.items) ? cartData.items : [];
      const updatedItems = [...itemsArray, productId];

      // Fetch the price of the product being added
      const productsCollectionRef = collection(firebasedb, "Products");
      const productSnapshot = await getDocs(productsCollectionRef);
      const productData = productSnapshot.docs.find(doc => doc.id === productId)?.data();

      // Extract the price from the product data
      const productPrice = productData?.price || 0;

      // Calculate the new total price
      const newTotalPrice = cartData.totalprice + productPrice;

      const newTotalItem = cartData.totalitem + 1; // Increment the total item count by 1

      await updateDoc(cartRef, {
        items: updatedItems,
        totalitem: newTotalItem,
        totalprice: newTotalPrice, // Update the total price field
      });
      console.log('Existing cart updated with new item:', productId);
    }
  };



  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Banner />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-30">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="mx-auto w-full max-w-sm space-y-2">
            </div>
          </div>
        </section>
        <section >
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl line-after mb-4">Combi Blinds</h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">

                Looking for low-maintenance yet functional window treatment solution? Our
                combi blinds are easy to clean, affordable, and durable!
              </p>
            </div>
            <div className="space-y-1">
              <div className="space-y-1 mx-auto flex justify-center">
              </div>
            </div>
            <div className="mx-auto flex flex-wrap justify-center gap-4 sm:gap-8 lg:justify-start">
              {documents.map((product, id) => (
                <div key={id} className="flex flex-col items-center justify-center space-y-2 w-full sm:w-auto">
                  <img width={300} height={300}
                    src={`${product.Image}`}
                    alt="Product Image"
                    className="aspect-square overflow-hidden rounded-md object-cover object-center" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="font-semibold">₱{product.price}</p>
                  </div>
                  <Button size="sm" onClick={() => addToCart(product.id)}>Add to Cart</Button>
                </div>
              ))}
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

