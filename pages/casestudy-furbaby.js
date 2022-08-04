import Link from "next/link";
import Applicatons from "../components/Applicatons";
import HeroSection from "../components/CaseStudyHeroSection";
import Challenge from "../components/Challenge";
import NextProject from "../components/NextProject";
import Solution from "../components/Solution";
import TechStack from "../components/TechStack";

export default function Home() {
  const data = {
    heroimage: "/assets/images/cs6/HS.svg",
    heading: "Furbaby Tracker",
    desc: "Real-time pet status Updates",
    link: "/",
  };
  const services = [{ service: "User Experience" }, { service: "Development" }];

  const challenge = {
    title: "Business challenge",
    desc: "A US-based client with a background in the healthcare industry approached us for the development of a platform with multiple client and vendor-facing applications. The purpose of the platform is to connect pet hospitalization facilities to end-users/pet owners. The platform enables the clinicians to keep their clients, the pet owners updated at every step of their pet’s journey at their facility. The major challenge was to import the pet data and keep it in sync with a third-party Pet management system. Other challenges were to keep the pet’s journey updated at all times and keep everything in sync across the platform and hence keep the pet owner updated via real-time notifications.",
  };
  const para = {
    para: "Our team of developers led by our solutions architect designed a solution leveraging serverless architecture and a number of AWS cloud-based services. AWS’s serverless framework helps keep the data synced with the third-party Pet management system while keeping the costs at a minimum. Google’s Firebase is also being used to enable real-time notifications across Android devices. The platform comprises multiple client-facing applications developed for both web and mobile architectures. The application work in perfect harmony to keep all the users involved in the process in sync. ",
  };
  const heading = { title: "The highlights of the system follow:" };
  const points = [
    {
      point:
        "Integrated multiple Pet Management Systems to import clinic history into the application’s datastore.",
    },
    {
      point:
        "Used Google Cloud Functions to import and keep approximately 10 million records in sync with the Pet Management systems.",
    },
    {
      point:"Developed high performance, low latency search module with less than 50ms response time."
    },
    {
      point:"Developed an e-commerce module supporting recurring payments, enabling the client to charge the customers on a weekly/monthly basis."
    }
  ];

  const apoints = [
    {
      point:
        "Mobile apps for clinicians: iOS and Android apps optimized for both mobile and tablet devices",
    },
    {
      point:
        "Mobile apps for pet owners: iOS and Android apps optimized for both mobile and tablet devices",
    },
    {
      point:"Web app for clinicians: Web-based application optimized for all the major browsers"
    }
  ];

  const tech = [
    { ts: "Node.js" },
    { ts: "ReactJS" },
    { ts: "GraphQL" },
    { ts: "React Native" },
    { ts: "Google Firebase" },
    { ts: "Google Cloud Functions" },
    { ts: "Google Cloud Storage" },
    { ts: "AWS Lambda" },
    { ts: "AWS API Gateway" },
    { ts: "AWS EC2" },
    { ts: "AWS CloudFront" },
    { ts: "AWS CloudFormation" },
    { ts: "Serverless Framework" },
    { ts: "AWS DynamoDB" }
  ];
  return (
    <div>
      <HeroSection data={data} services={services} />
      <Challenge challenge={challenge} />
      <Solution para={para} heading={heading} points={points}/>
      <Applicatons apoints={apoints}/>
      <TechStack tech={tech} />
      <NextProject/>
    </div>
  );
}
