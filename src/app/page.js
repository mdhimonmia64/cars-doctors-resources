import ServicesSection from "./components/ServicesSection";
import BannerPage from "./components/Banner";
import AboutSection from "./components/AboutSection";
import TopInfoBar from "./components/TopInforBar";
import ProductSection from "./components/ProductSection";
import MeetOurTeam from "./components/MeetOurTeam";
import ChooseUs from "./components/ChooseUs";
import TestimonialSection from "./components/TestimonialSection";
import CarShowcaseSection from "./components/CarShowcaseSection";
import EmergencySection from "./components/EmergencySection";
import FeaturedCars from "./components/FeaturedCars";

export default function Home() {
  return (
    <div className="bg-base-200 text-base-content">
    <BannerPage />
    <AboutSection />
    <ServicesSection />
    <TopInfoBar />
    <ProductSection />
    <FeaturedCars />
    <MeetOurTeam />
    <ChooseUs />
    <CarShowcaseSection />
    <TestimonialSection />
    <EmergencySection />
    </div>
  );
}
