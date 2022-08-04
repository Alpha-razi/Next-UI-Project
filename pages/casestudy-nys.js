import Link from "next/link";
import HeroSection from "../components/CaseStudyHeroSection";
import HistoryNYS from "../components/HistoryNYS";
import News from "../components/News";
import OldDesign from "../components/OldDesign";
import OurSolutions from "../components/OurSolutions";
import OptimalLine from "../components/OptimalLine";
import Process from "../components/Process";
import SunMember from "../components/SunMember";
import TechStack from "../components/TechStack";
import BalanceUx from "../components/BalanceUx";
import SeparatingSections from "../components/SeparatingSections";
import NextProject from "../components/NextProject";

export default function Home() {
  const data = {
    heroimage: "/assets/images/cs2/HS.svg",
    heading: "The NewYork Sun",
    desc: "Architectural innovation of the Website",
    link: "/",
  };
  const services = [{ service: "User Experience" }, { service: "Development" },{ service: "Ui Design" }, { service: "Branding" }];
  const nysservices = [{ service: "Ui Design" }, { service: "Branding" }];

  const tech = [
    { ts: "WordPress" },
    { ts: "PHP" },
    { ts: "MySQL" },
    { ts: "React" },
    { ts: "AWS Elastic Beanstalk" },
    { ts: "AWS Elastic Loadbalancer " },
    { ts: "AWS S3" },
    { ts: "AWS Cloudfron" },
  ];

  const OurSolData = [
    {
      title: "Our Solutions are Business Oriented",
      paragraph1:
        "One of the ways publications can generate income is through ads. So, we studied and experimented with different patterns to integrate add space to meet business goals and optamizing user experience.",
      imageTitle: "Article Page Design",
      imageUrl: "../assets/images/cs1/Artical.png",
    },
  ];

  const RealChallengeData = [
    {
      title: "The Real Challenge",
      paragraph3: (
        <>
          So the challange was to high light the Sun{" "}
          <strong>Member package</strong> while keeping the look & feel of the{" "}
          <strong>Sun Founder</strong> package even more premium & exclusive.
        </>
      ),
      imageTitle: "The Final Design",
      imageUrl: "../assets/images/cs1/RealChallenge.png",
    },
  ];

  const MediaLibraryData = [
    {
      title: "Media Library Design",
      paragraph4:
        "During the design phase, we noticed that there were a lot of people who preferred to watch the news rather than reading it.",
      paragraph5:
        "So, we introduced a media library page where they would find the same news in a video format.",
      imageTitle: "Media Library  Design",
      imageUrl: "../assets/images/cs1/Media.png",
    },
  ];

  const VerticalData = [
    {
      title: "Vertical Navigation",
      paragraph6:
        "For the video and media page, we used a vertical navigation bar so the user can switch between sections easily without going back and forth.",
      imageUrl: "../assets/images/cs1/Verticale.png",
    },
  ];

  return (
    <div>
      <HeroSection data={data} services={services} nysservices={nysservices} />
      <HistoryNYS />
      <News />
      <OldDesign />
      <Process />
      <BalanceUx />
      <SeparatingSections />
      <OurSolutions Data={OurSolData} />
      <OptimalLine />
      <OurSolutions Data={RealChallengeData} />
      <SunMember />
      <OurSolutions Data={MediaLibraryData} />
      <OurSolutions Data={VerticalData} />
      <TechStack tech={tech} />
      <NextProject/>
    </div>
  );
}
