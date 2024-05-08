import React, { useState, useEffect } from "react";
import { collection, getDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { firebasedb } from '../../../firebaseconfig';
import { User } from "lucide-react";
import { Carttable } from './carttable';

export const CartTable = () => {
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
    <div className="border rounded-lg overflow-hidden">
      <Carttable Products={products} quantity={quantities} />
    </div>
  );
};




