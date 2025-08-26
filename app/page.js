import HeroSection from "@/components/pages/Hero";
import TenderList from "../components/pages/TenderList";
import Contact from "@/components/pages/Contact";
import Service from "@/components/pages/Service";

export default function Home (){
  return (
    <>
    <HeroSection/>
    <Service/>
    <TenderList/>
    <Contact/>
    </>
  )
}