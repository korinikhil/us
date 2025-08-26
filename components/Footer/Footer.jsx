// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/US.png'; // Adjust path to your logo if needed
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          {/* Company Info & Logo */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" aria-label="Home">
              <Image
                src={Logo}
                alt="Company Logo"
                width={80}
                height={80}
                className="mb-4 object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for all tender and procurement needs. Simplifying the complex world of bids.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-[#AAD3E0] transition-colors duration-200">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-[#AAD3E0] transition-colors duration-200">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-[#AAD3E0] transition-colors duration-200">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-[#AAD3E0] transition-colors duration-200">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#AAD3E0] transition-colors duration-200">Home</Link></li>
              <li><Link href="/indian_tender" className="hover:text-[#AAD3E0] transition-colors duration-200">Indian Tender</Link></li>
              <li><Link href="/gem-tender" className="hover:text-[#AAD3E0] transition-colors duration-200">GEM Tender</Link></li>
              <li><Link href="/privacy" className="hover:text-[#AAD3E0] transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#AAD3E0] transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/service1" className="hover:text-[#AAD3E0] transition-colors duration-200">Tender Search</Link></li>
              <li><Link href="/service2" className="hover:text-[#AAD3E0] transition-colors duration-200">Bid Assistance</Link></li>
              <li><Link href="/service3" className="hover:text-[#AAD3E0] transition-colors duration-200">E-Procurement Training</Link></li>
              <li><Link href="/service4" className="hover:text-[#AAD3E0] transition-colors duration-200">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="mb-2">317 Unique Solution</p>
            <p className="mb-2">Soni Chal, Rakhial Road</p>
            <p className="mb-2">Ahmedabad, Gujarat 380009</p>
            <p className="mb-2">India</p>
            <p className="mb-2">Email: <a href="mailto:uniquesolution317@gmail.com" className="hover:text-[#AAD3E0] transition-colors duration-200">uniquesolution317@gmail.com</a></p>
            <p>Phone: <a href="tel:+918866002529" className="hover:text-[#AAD3E0] transition-colors duration-200">+91 88 66 00 2529</a></p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 317 Unique Solution. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}