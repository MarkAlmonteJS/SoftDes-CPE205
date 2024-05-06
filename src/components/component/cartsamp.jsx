import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { collection, getDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { firebasedb } from '../../../firebaseconfig';

export const CartTable = () => {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchCartAndProducts = async () => {
      const userId = sessionStorage.getItem('User');
      if (!userId) {
        console.error('User ID not found in session storage');
        setLoading(false);
        return;
      }

      const cartRef = doc(firebasedb, "Cart", userId);
      const cartSnapshot = await getDoc(cartRef);
      if (cartSnapshot.exists()) {
        const cartData = cartSnapshot.data();
        if (cartData && Array.isArray(cartData.items)) {
          const productPromises = cartData.items.map(async (id) => {
            const productRef = doc(firebasedb, "Products", id);
            const productSnapshot = await getDoc(productRef);
            if (productSnapshot.exists()) {
              return productSnapshot.data().name;
            }
            return null;
          });
          const productNames = await Promise.all(productPromises);
          setProducts(productNames.filter(name => name !== null));
          setCart(cartData);
          setLoading(false);
          console.log("Items found", productNames);
        } else {
          console.error('cartData.items is not an array');
        }
      } else {
        console.error('No cart data found for user');
      }
    };
    const initialQuantities = products.reduce((acc, product) => {
      acc[product.id] = 1; // Assuming each product ID is unique
      return acc;
    }, {});
    setQuantities(initialQuantities);

    fetchCartAndProducts();
  }, []);



  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Name</th>
            <th className="px-4 py-3 text-right font-medium">Quantity</th>
            <th className="px-4 py-3 text-right font-medium">Price</th>
            <th className="px-4 py-3 text-right font-medium">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((name, id) => (
              <tr key={id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-3 font-medium">{name}</td>
                <td>
                  <button onClick={handleminusitem(id)}>-</button>
                  <span></span>
                  <button >+</button>
                </td>
                <td className="px-4 py-3 font-medium">Price</td>
                <td className="px-4 py-3 font-medium">Total</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No products found.</td>
            </tr>
          )}
        </tbody>
        <tfoot className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-right font-medium" colSpan={4}>
              Total:
            </th>
            <th className="px-4 py-3 text-right font-medium">
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};