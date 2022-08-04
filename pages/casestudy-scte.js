import Link from "next/link";
import HeroSection from "../components/CaseStudyHeroSection";
import Challenge from "../components/Challenge";
import NextProject from "../components/NextProject";
import Solution from "../components/Solution";
import TechStack from "../components/TechStack";

export default function Home() {
  const data = {
    heroimage: "/assets/images/cs3/HS.svg",
    heading: "SCTE",
    desc: "Digital transformation of SCTE’s legacy Software System",
    link: "/",
  };
  const services = [{ service: "User Experience" }, { service: "Development" }];

  const challenge = {
    title: "The Challenge",
    desc: "The Society of Cable Telecommunications Engineers approached us for the digital transformation of their online presence as well as their internal learning management system. The problem with their system was the outdated on-site infrastructure which was rendering the whole system unusable due to poor performance and scalability. They wanted a system that was robust, highly scalable as well as backward compatible with their legacy infrastructure since the data sourcing had been done from their legacy system.",
  };

  const points = [
    {
      point:
        "Successfully achieved a performance elevation of 70% on the front-end website.",
    },
    {
      point:
        "Leveraged the client-side rendering (CSR) capabilities for ReactJS coupled with AWS Cloudfront distributions to ensure minimum latency at the client end.",
    },
    {
      point:"Developed a custom CMS solution tailored for company needs including a highly interactive page builder."
    },
    {
      point:"Wrote serverless functions to keep the legacy/core database in sync with the cloud database while reducing the costs of renting and managing bare metal servers."
    },
    {
      point:"Leveraged messaging queues to distribute a workload of over 15 million database operations across a batch of serverless instances to ensure minimal data loss and reduced cost in terms of execution time per instance."
    },
    {
      point:"Set up CI/CD pipelines to ensure seamless deployments inside a Virtual Private Cloud (VPC)."
    },
    {
      point:"Wrote 150 tests and implemented test automation using Jest and Puppeteer."
    },
    {
      point:"Reduced infrastructure deployment and maintenance costs by 70x."
    }
  ];
  const tech = [
    { ts: "Serverless Framework" },
    { ts: "Node.js" },
    { ts: "Laravel" },
    { ts: "React.js" },
    { ts: "Next.js" },
    { ts: "MySQL" },
    { ts: "Messaging Queues" },
    { ts: "Elasticsearch" },
    { ts: "AWS Elastic Beanstalk" },
    { ts: "AWS Lambda" },
    { ts: "AWS API Gateway" },
    { ts: "AWS SQS" },
    { ts: "AWS DynamoDB" },
    { ts: "AWS RDS" },
    { ts: "AWS Route53" },
    { ts: "AWS CloudFront" },
    { ts: "AWS CloudFormation" },
    { ts: "AWS Route53" },
    { ts: "AWS S3" },
    { ts: "AWS Elasticsearch" },
  ];
  return (
    <div>
      <HeroSection data={data} services={services} />
      <Challenge challenge={challenge} />
      <Solution points={points}/>
      <TechStack tech={tech} />
      <NextProject/>
    </div>
  );
}
