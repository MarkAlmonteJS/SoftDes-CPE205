import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";

export function Carttable({ Products, quantity }) {
  console.log("this is the quantity in table: ", quantity);

  const getQuantity = (productId) => {
    console.log(`Getting quantity for product ID: ${productId}`);
    const productQuantityObj = quantity.find(q => q.productId === productId);
    console.log(`Found quantity object for product ID ${productId}:`, productQuantityObj);
    return productQuantityObj ? productQuantityObj.quantity : 0;
  };

  return (
    <Table>
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell className="font-medium">Php {product.price}</TableCell>
            <TableCell className="font-medium">
              {getQuantity(product.id)} {/* Display the quantity for this product */}
            </TableCell>
            <TableCell className="text-right">
              {product.price * getQuantity(product.id)} {/* Calculate total amount for this product */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {/* Calculate total amount for all products */}
            {Products.reduce((total, product) => total + product.price * getQuantity(product.id), 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
