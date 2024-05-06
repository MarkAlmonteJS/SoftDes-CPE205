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

  async function getPriceFromItemId(itemId) {
    const productsRef = collection(firebasedb, "Products");
    const productDocRef = doc(productsRef, itemId);
    const productDocSnapshot = await getDoc(productDocRef);

    if (productDocSnapshot.exists()) {
      // If the document exists, return the price
      return productDocSnapshot.data().price;
    } else {
      // If the document does not exist, return 0 or throw an error
      console.error(`Product with ID ${itemId} not found.`);
      return 0; // Or throw new Error(`Product with ID ${itemId} not found.`);
    }
  }

  const addToCart = async (itemId, quantity) => {
    const userId = sessionStorage.getItem("User"); // Assuming you have a way to get the user ID
    const cartRef = doc(firebasedb, "Cart", userId);

    // Fetch the current cart data
    const cartSnapshot = await getDoc(cartRef);
    let cartData = cartSnapshot.data();

    // If the cart does not exist, initialize it
    if (!cartSnapshot.exists()) {
      cartData = {
        status: "active",
        items: [],
        quantity: [],
        totalitem: 0,
        totalprice: 0,
      };
    }

    // Find the index of the item in the items array
    const itemIndex = cartData.items.findIndex(item => item === itemId);

    // If the item exists, update its quantity
    if (itemIndex !== -1) {
      cartData.quantity[itemIndex] += quantity;
    } else {
      // If the item does not exist, add it to the items array and add a corresponding quantity
      cartData.items.push(itemId);
      cartData.quantity.push(quantity);
    }

    // Update the total item count and total price
    cartData.totalitem += quantity;
    cartData.totalprice += quantity * getPriceFromItemId(itemId);
    console.log("This is cartref:", cartRef)
    console.log("This is cardata", cartData) // Assuming getPriceFromItemId is a function that returns the price of an item based on its ID

    // Update the cart document
    await updateDoc(cartRef, cartData);
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
                  <div className="flex space-x-2">
                    <label className="flex items-center">
                      <input type="radio" name={`product-${id}`} value="option1" className="hidden" />
                      <span className="w-4 h-4 bg-white border-2 rounded-full"></span>
                      <span className="ml-2">Option 1</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name={`product-${id}`} value="option2" className="hidden" />
                      <span className="w-4 h-4 bg-white border-2 rounded-full"></span>
                      <span className="ml-2">Option 2</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name={`product-${id}`} value="option3" className="hidden" />
                      <span className="w-4 h-4 bg-white border-2 rounded-full"></span>
                      <span className="ml-2">Option 3</span>
                    </label>
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

