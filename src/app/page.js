
import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import BannerPage from "./components/Banner";
import AboutSection from "./components/AboutSection";
import TopInfoBar from "./components/TopInforBar";

export default function Home() {
  return (
    <>
    <BannerPage />
    <AboutSection />
    <ServicesSection />
    <TopInfoBar />
    </>
  );
}
