import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Unique tenders ",
  description: "All GEM tender provide here",
  icons: {
    icon: '/favicon.ico', // public directory se path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Ensure Header component has "use client" directive if it uses client-side code */}
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
