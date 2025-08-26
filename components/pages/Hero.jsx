// components/HeroSection.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGavel, FaRegHandshake, FaFileContract, FaMoneyBillWave } from "react-icons/fa";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/tenders?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      
      <div className="text-center z-10 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-gray-800 leading-tight">
          &quot;Where Every <span className="text-[#90cfe2] font-bold">Tender Meets</span> the Right Bidder.&quot;
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          100,000+ companies make smarter decisions with Unique Tenders
        </p>
      </div>

      
      <form onSubmit={handleSearch} className="w-full max-w-xl md:max-w-2xl relative z-10 px-4">
        <input
          type="text"
          placeholder="Search Your Tender..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-3 pr-6 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#90cfe2] transition-all duration-300 text-base md:text-lg shadow-md hover:shadow-lg"
        />
        <svg
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>

      
      
      <div className="absolute top-8 left-10 sm:top-16 sm:left-16 md:top-28 md:left-24 lg:top-36 lg:left-32
                  flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg animate-bounce-slow
                  text-lg sm:text-xl md:text-2xl">
        <FaGavel className="text-gray-800" /> 
      </div>

      
      <div className="absolute top-20 right-8 sm:top-28 sm:right-16 md:top-40 md:right-24 lg:top-48 lg:right-32
                  flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg animate-pulse-slow
                  text-lg sm:text-xl md:text-2xl">
        <FaRegHandshake className="text-[#7fb8c7]" />
      </div>

      
      <div className="absolute bottom-8 left-1/4 sm:bottom-16 sm:left-1/3 md:bottom-28 md:left-1/4 lg:bottom-36 lg:left-1/5
                  flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg animate-bounce-slow-delayed
                  text-lg sm:text-xl md:text-2xl">
        <FaFileContract className="text-[#aad3e0] " />
      </div>

      
      <div className="absolute bottom-20 right-1/4 sm:bottom-28 sm:right-1/3 md:bottom-20 md:right-1/4 lg:bottom-28 lg:right-1/5
                  flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg animate-pulse-slow-delayed
                  text-lg sm:text-xl md:text-2xl">
        <FaMoneyBillWave className="text-[#5ba5b8]" />
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-50 z-0"></div>
    </div>
  );
};

export default HeroSection;
