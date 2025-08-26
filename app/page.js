import HeroSection from "@/components/pages/Hero";
import Service from "@/components/pages/service";
import TenderList from "../components/pages/TenderList";
import Contact from "@/components/pages/Contact";

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