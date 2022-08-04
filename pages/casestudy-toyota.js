import Link from "next/link";
import HeroSection from "../components/CaseStudyHeroSection";
import Introduction from "../components/ToyotaIntro";
import UserExp from "../components/UserExp";
import UxExp from "../components/UxExp";
import MinimalInterface from "../components/MinimalInterface";
import NextProject from "../components/NextProject";

export default function Home() {
  const data = {
    heroimage: "/assets/images/cs1/HS.svg",
    heading: "Toyota North America",
    desc: "UX  and Speed optimization to improve Conversion rates",
    link: "/",
  };
  const services = [{ service: "User Experience" }, { service: "Development" }];
  return (
    <div>
      <HeroSection data={data} services={services} />
      <Introduction />
      <UserExp />
      <UxExp />
      <MinimalInterface />
      <NextProject />
    </div>
  );
}
