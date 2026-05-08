import Hero from "../components/landingpage/Hero";
import Partners from "../components/landingpage/Partners";
import Fleet from "../components/landingpage/Fleet";
import FAQ from "../components/landingpage/FAQ";
import { ScrollDrift } from "../components/animations/Antigravity";
import Process from "../components/landingpage/Process";
import Gallery from "../components/landingpage/Gallery";
import PerformanceSpecs from "../components/landingpage/PerformanceSpecs";
import MissionTechGrid from "../components/landingpage/CombinedCapabilities";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <ScrollDrift offset={15}>
        <Partners />
      </ScrollDrift>
      <ScrollDrift offset={30}>
        <Fleet />
      </ScrollDrift>
      <ScrollDrift offset={20}>
        <MissionTechGrid />
      </ScrollDrift>
      <ScrollDrift offset={40}>
        <Gallery />
      </ScrollDrift>
      <ScrollDrift offset={25}>
        <PerformanceSpecs />
      </ScrollDrift>
      <ScrollDrift offset={15}>
        <Process />
      </ScrollDrift>
      <ScrollDrift offset={35}>
        <FAQ />
      </ScrollDrift>
    </>
  );
};

export default LandingPage;
