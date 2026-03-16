import {Header, Footer} from "@/components/layout";
import { HeroSection, FounderStorySection, FamilyTraditionSection, DifferentialsSection, CallToActionSection } from "./components";

export default function AboutUs() {
  return (
    <>
      <Header />
      
      <div id="sobre" style={{ background: "#1a0f05", paddingTop: "clamp(52px, 7vw, 68px)" }}>
        <HeroSection />
        <FounderStorySection />
        <FamilyTraditionSection />
        <DifferentialsSection />
        <CallToActionSection />
      </div>

      <Footer />
    </>
  );
}
