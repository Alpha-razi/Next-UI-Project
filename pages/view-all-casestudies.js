import Link from "next/link";
import FeatureWork from "../components/FeatureWork";
import MoreCaseStudies from "../components/MoreCaseStudies";


export default function Home() {

  return (
    <div className="bg-[#0B0D13] pt-28 ">
      <FeatureWork/>
      <MoreCaseStudies/>
    </div>
  );
}
