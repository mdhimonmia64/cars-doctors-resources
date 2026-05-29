import ServicesSection from "./components/ServicesSection";
import BannerPage from "./components/Banner";
import AboutSection from "./components/AboutSection";
import TopInfoBar from "./components/TopInforBar";
import ProductSection from "./components/ProductSection";
import MeetOurTeam from "./components/MeetOurTeam";
import ChooseUs from "./components/ChooseUs";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <>
    <BannerPage />
    <AboutSection />
    <ServicesSection />
    <TopInfoBar />
    <ProductSection />
    <MeetOurTeam />
    <ChooseUs />
    <TestimonialSection />
    </>
  );
}
