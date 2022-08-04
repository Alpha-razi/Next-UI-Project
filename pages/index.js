import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import FeatureWork from "../components/FeatureWork";
import Impact from "../components/Impact";
import ClientReviews from "../components/ClientReviews";
export default function Home() {
  return (
    <div className="bg-[#0B0D13]">
     <HeroSection/>
     <Services/>
     <FeatureWork/>
     <ClientReviews/> 
     <Impact/>
    </div>
  );
}
