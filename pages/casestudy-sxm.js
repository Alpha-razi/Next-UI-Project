import Link from "next/link";
import HeroSection from "../components/CaseStudyHeroSection";
import Challenge from "../components/Challenge";
import NextProject from "../components/NextProject";
import Solution from "../components/Solution";
import TechStack from "../components/TechStack";


export default function Home() {
  const data = 
    {
      heroimage: "/assets/images/cs4/HS.svg",
      heading: "SiriusXM Radio",
      desc: "Brochure Website",
      link: "/",
     
    }
  ;
  const services= [{ service: "User Experience" }, { service: "Development" }];

  const challenge = {
    title: "Business challenge",
    desc: "SiriusXM was in collaboration with ARI to provide their drivers access to over 150 of their channels. The challenge they faced was a seamless integration between the two systems. Moreover, they also needed a simple enrollment process for the drivers to onboard them into the program without much hassle. ",
  };

  const para = {
    para: "Our team designed and developed an enrollment system with having rich user experience that helped the driver onboard easily by filling and submitting a simple form. The integration works seamlessly behind the scenes and provides access to the drivers approved by the ARI moderators.",
  };
  const heading = { title: "The highlights of the system at work follow:" };
  const points = [
    {
      point:
        "Designed and developed landing and enrollment pages to onboard the drivers into the system",
    },
    {
      point:
        "Provided an integrated enrollment system that is easy to use for the drivers to be onboarded",
    },
    {
      point:"Integrated ARI into the SiriusXM authorization system"
    }
  ];

  const tech = [
    { ts: "Node.js" },
    { ts: "ReactJS" },
    { ts: "MongoDB" },
    { ts: "React Native" },
    { ts: "Google Firebase" },
    { ts: "Google Cloud Functions" },
    { ts: "Google Cloud Storage" },
    { ts: "AWS Lambda" },
    { ts: "AWS API Gateway" },
    { ts: "AWS EC2" },
    { ts: "AWS CloudFront" },
    { ts: "AWS CloudFormation" },
  ];
  return (
    <div>
      <HeroSection data={data} services={services}/>
     <Challenge challenge={challenge} />
      <Solution para={para} heading={heading} points={points}/>
      <TechStack tech={tech}/>
      <NextProject/>
    </div>
  );
}
