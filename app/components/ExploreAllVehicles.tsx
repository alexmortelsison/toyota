"use client";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { JSX, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import CategoryBar from "./CategoryBar";
import Loading from "./Loading";
import { RootState } from "@/app/store/store"; // Adjust this import if needed

const ITEMS_PER_PAGE = 3;

export default function ExploreAllVehicles(): JSX.Element {
  const vehicles =
    useSelector((state: RootState) => state.product.products) ?? [];

  const [selectedCategory, setSelectedCategory] =
    useState<string>("Cars & Minivan");
  const [currentPage, setCurrentPage] = useState<number>(0);

  const filteredVehicles = vehicles.filter(
    (v) => v.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);

  const currentVehicles = filteredVehicles.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  return (
    <div className="mt-28 px-4">
      <h1 className="text-5xl text-center font-bold mb-10">
        Explore All Vehicles
      </h1>

      <CategoryBar
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategoryChange}
      />

      {vehicles.length === 0 ? (
        <div className="flex justify-center py-24">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex justify-center gap-6 flex-wrap transition-all duration-300 mt-12">
            {currentVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex w-[600px] h-[300px] bg-white rounded-xl overflow-hidden shadow-md"
              >
                {/* Image Section */}
                <div className="relative w-3xl">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={300}
                    height={300}
                    className="object-cover h-full w-full"
                    unoptimized
                    priority
                  />
                  {vehicle.badge && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                      {vehicle.badge}
                    </span>
                  )}
                  {vehicle.msrpAsShown && (
                    <span className="absolute bottom-2 left-2 text-[10px] text-white">
                      As shown: {vehicle.msrpAsShown}
                    </span>
                  )}
                </div>

                {/* Info Section */}
                <div className="w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{vehicle.year}</p>
                    <h2 className="text-xl font-bold">{vehicle.name}</h2>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      ${vehicle.price.toLocaleString()}
                    </p>
                    {vehicle.mpg && (
                      <p className="text-xs text-gray-500">
                        Up to Est. MPG {vehicle.mpg}
                      </p>
                    )}
                    <button className="mt-3 bg-black text-white text-sm px-5 py-1.5 rounded-full">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`rounded-full w-10 h-10 flex items-center justify-center transition hover:cursor-pointer ${
                currentPage === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              <BiChevronLeft />
            </button>

            <span className="text-sm">
              {currentPage + 1} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`rounded-full w-10 h-10 flex items-center justify-center transition hover:cursor-pointer ${
                currentPage === totalPages - 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-black/90"
              }`}
            >
              <BiChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
