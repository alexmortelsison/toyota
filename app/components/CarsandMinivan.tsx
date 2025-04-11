"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface Props {
  selectedCategory: string;
}

export default function CarsandMinivan({ selectedCategory }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

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
