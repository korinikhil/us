// pages/index.js
"use client";
import Head from 'next/head';
import Image from 'next/image';
import Building from '../../public/building.png';
import React, { useEffect, useRef, useState } from 'react';

const generateTenders = (count) => {
  const baseTender = {
    title: "Tender For Construction of Road, Bridge, and Flyover in City Area Phase II with Advanced Drainage Systems and Lighting",
    category: "Corporations/ Associations/ Others / Public Works Department - Infrastructure Development Division",
    trn: "US34607",
    date: "25 JUN, 2025",
    value: "₹ 99.55 LACS",
    location: "Ahmedabad - Gujarat",
  };

  return Array.from({ length: count }, (_, i) => ({
    ...baseTender,
    trn: `US34607-${i + 1}`,
    title: `${baseTender.title.split('Phase II')[0]} Phase ${i + 1}`,
    value: `₹ ${Math.floor(Math.random() * 50 + 50)}.55 LACS`,
    location: i % 2 === 0 ? "Ahmedabad - Gujarat" : "Mumbai - Maharashtra",
  }));
};

const tenders = generateTenders(25);

const TenderCard = ({ tender }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 md:p-5 my-2 sm:my-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-full">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-50 flex justify-center items-center mb-3 sm:mb-0 mr-0 sm:mr-4 flex-shrink-0">
      <Image src={Building} alt="Building Icon" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
    </div>

    <div className="flex-grow min-w-0 pr-2">
      {/* Removed 'truncate' to allow text to wrap */}
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 leading-tight">{tender.title}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-0.5">{tender.category}</p>
      <p className="text-gray-600 text-sm sm:text-base">TRN : <strong className="font-medium">{tender.trn}</strong></p>
    </div>

    <div className="flex flex-col items-start sm:items-end ml-0 sm:ml-4 text-left sm:text-right flex-shrink-0 mt-3 sm:mt-0">
      <div className="flex items-center text-gray-700 text-sm sm:text-base mb-1">
        <span className="mr-1 sm:mr-2 text-gray-500 text-base flex-shrink-0">📅</span>
        {/* Removed 'whitespace-nowrap' to allow text to wrap */}
        <span className="flex-grow">{tender.date}</span>
      </div>
      <div className="flex items-center text-gray-700 text-sm sm:text-base mb-1">
        <span className="mr-1 sm:mr-2 text-gray-500 text-base flex-shrink-0">💰</span>
        {/* Removed 'whitespace-nowrap' to allow text to wrap */}
        <span className="flex-grow">{tender.value}</span>
      </div>
      <div className="flex items-center text-gray-700 text-sm sm:text-base">
        <span className="mr-1 sm:mr-2 text-gray-500 text-base flex-shrink-0">📍</span>
        {/* Removed 'whitespace-nowrap' to allow text to wrap */}
        <span className="flex-grow">{tender.location}</span>
      </div>
    </div>
  </div>
);

export default function TenderList() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    const scrollSpeed = 1;
    const intervalTime = 20;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop += scrollSpeed;
        }
      }, intervalTime);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    startScrolling();

    scrollContainer.addEventListener('mouseenter', stopScrolling);
    scrollContainer.addEventListener('mouseleave', startScrolling);

    return () => {
      stopScrolling();
      scrollContainer.removeEventListener('mouseenter', stopScrolling);
      scrollContainer.removeEventListener('mouseleave', startScrolling);
    };
  }, []);

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col items-center py-8 px-2 sm:px-4 lg:px-6">
      <Head>
        <title>Latest Tenders</title>
        <meta name="description" content="Latest tender listings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 sm:mb-8 pb-2 border-b-4 border-blue-500 inline-block">
        Latest <span className="text-blue-500">Tender</span>
      </h1>

      <main
        ref={scrollRef}
        className="w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl h-[500px] sm:h-[600px] md:h-[700px] overflow-y-scroll pr-2 md:pr-4 flex flex-col items-center"
      >
        <style jsx>{`
          main::-webkit-scrollbar {
            width: 8px;
          }
          main::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          main::-webkit-scrollbar-thumb {
            background: #66b3ff;
            border-radius: 10px;
          }
          main::-webkit-scrollbar-thumb:hover {
            background: #5599ee;
          }
          main {
            scrollbar-width: thin;
            scrollbar-color: #66b3ff #f1f1f1;
          }
        `}</style>

        {tenders.map((tender) => (
          <TenderCard key={tender.trn} tender={tender} />
        ))}
      </main>
    </div>
  );
}
