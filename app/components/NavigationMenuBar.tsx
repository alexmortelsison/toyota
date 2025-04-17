"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import CategoryBar from "./CategoryBar";
import CarsandMinivan from "./CarsandMinivan";
import { AppDispatch } from "@/app/store/store";
import { setProducts } from "../store/features/productSlice";

export default function NavigationMenuBar() {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Cars & Minivan");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      dispatch(setProducts(data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-1 font-semibold px-4  rounded-full hover:bg-gray-100 transition pt-2">
          <span>Vehicles</span>
          <MdKeyboardArrowDown size={20} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-screen mt-4 p-6 border shadow-xl bg-white"
        align="start"
      >
        <div className="w-full flex flex-col">
          <CategoryBar
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
          <CarsandMinivan selectedCategory={selectedCategory} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
