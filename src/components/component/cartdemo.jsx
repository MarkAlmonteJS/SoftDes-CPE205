import React from 'react'; // Ensure React is imported if not already done
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Ensure these imports are correct
import { Button } from "../ui/button";

export function Cartdemo({ Products, quantity, updateQuantity }) {
  console.log("this is the quantity in table: ", quantity);

  const getQuantity = (productId) => {
    console.log(`Getting quantity for product ID: ${productId}`);
    const productQuantityObj = quantity.find(q => q.productId === productId);
    console.log(`Found quantity object for product ID ${productId}:`, productQuantityObj);
    return productQuantityObj ? productQuantityObj.quantity : 0;
  };


  return (
    <Table className="table">
      <TableCaption>Double check before you checkout.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-black font-bold">Product Name</TableHead>
          <TableHead className="text-black font-bold">Price</TableHead>
          <TableHead className="text-black font-bold">Quantity</TableHead>
          <TableHead className="text-right text-black font-bold">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell className="font-medium">Php {product.price}</TableCell>
            <TableCell className="font-medium">
              {getQuantity(product.id)}
            </TableCell>
            <TableCell className="text-right font-bold">
              {product.price * getQuantity(product.id)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="text-right font-bold">Total</TableCell>
          <TableCell className="text-right">
            {Products.reduce((total, product) => total + product.price * getQuantity(product.id), 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
