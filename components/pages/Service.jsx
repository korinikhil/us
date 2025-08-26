"use client";
import { useRouter } from "next/navigation";
import { FaBell } from "react-icons/fa";
import { PiHandshakeThin } from "react-icons/pi";
import { PiGoogleChromeLogoLight } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
export default function Service() {
  const router = useRouter();

  const serviceData = [
    {
      id: 1,
      imgIcon: <FaBell className="text-3xl " />,
      heading: "Tender Alert",
      content: "Activate daily alerts to know Unique Tender available of your work.",
      link: "/tender-alert",
      btnText: "Get Alert",
      bg: "bg-[#FDFDFD]",
    },
    {
      id: 2,
      imgIcon: <PiHandshakeThin  className="text-3xl "/>,
      heading: "Bidding Support",
      content: "Get expert help for preparing and submitting your bids.",
      link: "/tender-alert",
      btnText: "Start Now",
      bg: "bg-[#FDFDFD]",
    },
    {
      id: 3,
      imgIcon: <PiGoogleChromeLogoLight className="text-3xl "/>,
      heading: "Document Assistance",
      content: "Professional support in tender document preparation.",
      link: "/tender-alert",
      btnText: "Upload Docs",
      bg: "bg-[#FDFDFD]",
    },
    {
      id: 4,
      imgIcon: <CiLock className="text-3xl " />,
      heading: "Tender Tracking",
      content: "Track tenders and deadlines easily with our dashboard.",
      link: "/tender-alert",
      btnText: "Track Now",
      bg: "bg-[#FDFDFD]",
    },
    {
      id: 5,
      imgIcon: <BiSupport className="text-3xl" />,
      heading: "Live Support",
      content: "Chat with our experts for instant help and support.",
      link: "/tender-alert",
      btnText: "Chat Now",
      bg: "bg-[#FDFDFD]",
    },
    {
      id: 6,
      imgIcon: <CgWebsite  className="text-3xl "/>,
      heading: "Tender Results",
      content: "Get notified about awarded tenders instantly.",
      link: "/tender-alert",
      btnText: "View Results",
      bg: "bg-[#FDFDFD]",
    },
  ];

  function handleNavigate(path) {
    if (path) router.push(path);
  }

  return (
    <div className="relative py-16 px-6 bg-gray-100">
      {/* Sticky Heading */}
      <div className="sticky top-0 bg-gray-100 py-4 z-20">
        <h4 className="text-center text-3xl font-bold text-gray-800">
          OUR <span className="text-[#00B0C0]">SERVICES</span>
        </h4>
      </div>

      {/* Services Grid */}
      <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {serviceData.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-md mb-4">
              {item.imgIcon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.heading}</h3>
            <p className="text-gray-600 mb-4">{item.content}</p>
            <button
              onClick={() => handleNavigate(item.link)}
              className="px-5 py-2 rounded-full bg-[#00B0C0] text-white font-medium hover:bg-[#008a96] transition block w-1/2"
            >
              {item.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
