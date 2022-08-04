import Link from "next/link";
import HeroSection from "../components/CaseStudyHeroSection";
import Challenge from "../components/Challenge";
import NextProject from "../components/NextProject";
import Solution from "../components/Solution";
import TechStack from "../components/TechStack";


export default function Home() {
  const data = 
    {
      heroimage: "/assets/images/cs5/HS.svg",
      heading: "Litecure",
      desc: "Companion Animal Health - Digital Transformation",
      link: "/",
     
    }
  ;
  const services= [{ service: "User Experience" }, { service: "Development" }];

  const challenge = {
    title: "Business challenge",
    desc: "LiteCure designs and manufactures medical devices for medical and veterinary healthcare professionals. They reached out to our team to design and develop an online learning platform to facilitate their staff as well as provide certifications to veterinary practitioners. They also needed to transform their online presence into something modern that conforms to the latest market trends and standards.",
  };
 

  const para = {
    para: "We developed a solution tailored to the day-to-day working lives of both veterinary professionals and instructors. It was also designed to provide the management and administration with effective insights and overviews: the relationship between curriculum objectives, course objectives, and evaluation features as a basic structure. After a vet completes a course, the results are automatically collected by the system, which helps award certain certifications to them based on their scores.",
  };
  const heading = { title: "The platform was developed in close collaboration with Litecure’s core team. The highlights are:" };
  const points = [
    {
      point:
        "Created a highly robust consumer portal with integrated CMS, LMS, and E-Commerce capabilities.",
    },
    {
      point:
        "Designed, architected, and wrote the front-end of the web application using ReactJS with over 5,000 reusable components.",
    },
    {
      point:"Developed a Content Management System (CMS) from the ground up tailored for client’s needs using React coupled with a headless Laravel API."
    },
    {
      point:
        "Developed a Learning Management System backed by a headless Laravel API with a highly interactive.",
    },
    {
      point:
        "The user interface is written in ReactJS.",
    },
    {
      point:"Wrote serverless functions to isolate compute-intensive workloads from the core API resulting in higher throughput."
    }
    ,
    {
      point:
        "Achieved notable performance gains resulting in a 79% reduction in bounce rate and an 82% increase in page views.",
    },
    {
      point:"Companion Animal Health website received the National Variety Award in 2019"
    }
  ];

  const tech = [
    { ts: "Node.js" },
    { ts: "Serverless Framework" },
    { ts: "Laravel" },
    { ts: "MySQL" },
    { ts: "React.js" },
    { ts: "AWS Elastic Beanstalk" },
    { ts: "AWS Lambda" },
    { ts: "AWS API Gateway" },
    { ts: "AWS SQS" },
    { ts: "AWS DynamoDB" },
    { ts: "AWS RDS" },
    { ts: "AWS Route53" },
    { ts: "AWS S3" },
    { ts: "AWS Cloudfront" },
    { ts: "AWS CloufFormation" },
    { ts: "AWS Elasticsearch" },
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
