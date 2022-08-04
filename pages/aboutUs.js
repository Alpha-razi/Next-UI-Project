import HeroSection from "../components/HeroSectionAboutUs";
import OurATeam from "../components/OurA-Team";
import OurImpact from "../components/OurImpact";
import Location from "../components/OurLocations";
export default function Home() {
  return (
    <div className="bg-[#0B0D13]">
     <HeroSection/>
     <OurATeam/>
     <OurImpact/>
     <Location/>
    </div>
  );
}
