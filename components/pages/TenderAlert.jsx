// pages/index.js
import Head from 'next/head';
import React from 'react';

const TenderAlert = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Head>
        <title>Tender Alert</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SVG Background - Subtle Wave Pattern */}
      <svg
        className="absolute inset-0 z-0 opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fill="#a7d9f7"
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,117.3C672,96,768,96,864,117.3C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/* Another wave for more depth */}
      <svg
        className="absolute inset-0 z-0 opacity-20 transform translate-x-1/4 translate-y-1/4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fill="#c0e7fa"
          fillOpacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,149.3C672,139,768,117,864,106.7C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>


      <main className="relative z-10 bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-6xl w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-4">Tender Alert</h1>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full max-w-md">
            <div className="flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17l-3 3m0 0l-3-3m3 3V3m-6 4h12a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
                ></path>
              </svg>
              <h2 className="text-2xl font-semibold text-gray-700">Free Tender Alert</h2>
            </div>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter Name..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="yourName"
                    name="yourName"
                    placeholder="Enter Name..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="emailID" className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="emailID"
                    name="emailID"
                    placeholder="Enter Here..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Enter Here..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="selectState" className="block text-sm font-medium text-gray-700 mb-1">
                    Select State
                  </label>
                  <input
                    type="text"
                    id="selectState"
                    name="selectState"
                    placeholder="Enter Here..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="selectCity" className="block text-sm font-medium text-gray-700 mb-1">
                    Select City
                  </label>
                  <input
                    type="text"
                    id="selectCity"
                    name="selectCity"
                    placeholder="Enter Here..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Brief Description Here..."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            Warm Greetings from{' '}
            <a href="https://www.uniquetenders.com" className="text-blue-600 hover:underline">
              www.uniquetenders.com
            </a>
            , India's most reliable and growing Tender Information Portal.
          </p>
          <p>
            <strong className="block text-lg font-semibold text-gray-800 mb-1">Free Sample Tender Alert</strong>
            At UniqueTenders, we understand that before investing in any service, you want to be confident about its value. That's why we provide a Free Sample Tender Alert facility for new users.
          </p>
          <p>
            By subscribing to our free alerts, you will receive daily tender updates related to your industry/business directly in your email inbox – with essential details included.
          </p>
          <p>
            This helps you closely monitor the kind of tender opportunities available for your business without any commitment.
          </p>
          <p>
            Once you are satisfied with the quality and relevance of the information, you can easily upgrade to our premium services and unlock the full version with complete tender details and advanced features.
          </p>
        </div>
      </main>
    </div>
  );
};

export default TenderAlert;