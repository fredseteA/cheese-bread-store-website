import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection, WhatsappCTASection, FinalCTASection } from "./components";

export default function Contact() {
  return (
    <>
      <Header />

      <div id="contato" style={{ background: "#1a0f05", paddingTop: "clamp(52px, 7vw, 68px)" }}>

        <HeroSection />
        <WhatsappCTASection />
        <FinalCTASection />

      </div>

      <Footer />
    </>
  );
}