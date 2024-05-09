import React, { useState, useEffect } from "react";
import { collection, getDoc, doc, setDoc, updateDoc } from 'firebase/firestore'; // Removed duplicate import
import { firebasedb } from '../../../firebaseconfig';
import { User } from "lucide-react";
import { Carttable } from './carttable'
import { Cartdemo } from "./cartdemo";

export const CartTable = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getQuantity = (productId) => {
    return quantities.find(q => q.productId === productId)?.quantity || 0;
  };

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

    // Calculate total price
    const totalPrice = productsData.reduce((acc, product) => acc + product.price * getQuantity(product.id), 0);
    setTotalPrice(totalPrice); // Update total price state

    return productsData;
  };
  const removeProductFromCart = async (productId) => {
    const userId = sessionStorage.getItem("User");
    if (!userId) {
      console.error("User not found");
      return;
    }

    const cartRef = doc(firebasedb, "Cart", userId);
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      const cartData = cartSnap.data();
      const updatedItems = cartData.items.filter(item => item.productId !== productId);

      await setDoc(cartRef, { items: updatedItems }, { merge: true });
      setCart(updatedItems);
      setQuantities(updatedItems);
    } else {
      console.error("No cart found for this user.");
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    const userId = sessionStorage.getItem("User");
    if (!userId) {
      console.error("User not found");
      return;
    }

    const cartRef = doc(firebasedb, "Cart", userId);
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      const cartData = cartSnap.data();
      const productStockRef = doc(firebasedb, "Products", productId);
      const productStockSnap = await getDoc(productStockRef);

      if (productStockSnap.exists()) {
        const productStock = productStockSnap.data().stock;

        // Check if the new quantity is within limits
        if (newQuantity < 0 || newQuantity > productStock) {
          console.error("Quantity out of range");
          return;
        }

        const updatedItems = cartData.items.map(item => {
          if (item.productId === productId) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });

        await setDoc(cartRef, { items: updatedItems }, { merge: true });
        setCart(updatedItems);
        setQuantities(updatedItems);

        // If the new quantity is 0, remove the product from the cart
        if (newQuantity === 0) {
          removeProductFromCart(productId);
        }
      } else {
        console.error("Product not found in Products collection.");
      }
    } else {
      console.error("No cart found for this user.");
    }
  };

  const updateCartTotalPrice = async () => {
    const userId = sessionStorage.getItem("User");
    if (!userId) {
      console.error("User not found");
      return;
    }
    const cartRef = doc(firebasedb, "Cart", userId);
    await updateDoc(cartRef, { totalprice: totalPrice }); // Update total price in the Cart document
  };



  const fetchCart = async () => {
    const userId = sessionStorage.getItem("User");
    if (!userId) {
      console.error("User not found");
      return;
    }

    const cartRef = doc(firebasedb, "Cart", userId);
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      const cartData = cartSnap.data();
      setCart(cartData.items);
      setQuantities(cartData.items);
      setLoading(false);
    } else {
      console.error("No cart found for this user.");
    }
  };

  useEffect(() => {
    updateCartTotalPrice();
  }, [totalPrice]);

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
      <Carttable Products={products} quantity={quantities} updateQuantity={updateQuantity} />
    </div>
  );
};