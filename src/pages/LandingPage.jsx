import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import Fleet from "../components/home/Fleet";
import FAQ from "../components/home/FAQ";
import { ScrollDrift } from "../components/animations/Antigravity";
import Process from "../components/home/Process";
import Gallery from "../components/home/Gallery";
import PerformanceSpecs from "../components/home/PerformanceSpecs";
import MissionTechGrid from "../components/home/CombinedCapabilities";

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
