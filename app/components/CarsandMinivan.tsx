"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store"; // adjust path if needed
import Image from "next/image";

interface Props {
  selectedCategory: string;
}

export default function CarsandMinivan({ selectedCategory }: Props) {
  const products = useSelector((state: RootState) => state.product.products);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12 mb-16">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="p-4 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-600 mt-1">
            Starting MSRP{" "}
            <span className="font-bold">${product.price.toLocaleString()}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
