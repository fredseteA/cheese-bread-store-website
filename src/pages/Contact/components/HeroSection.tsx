import heroImage from "@/assets/hero-image.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "clamp(280px, 35vw, 440px)" }}>
        <img src={heroImage} alt="Contato" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 50%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,4,0,0.92) 0%, rgba(10,4,0,0.6) 50%, rgba(10,4,0,0.35) 100%)" }} />

        <div
            className="absolute bottom-0 text-center"
            style={{ left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 700, padding: "0 clamp(1.5rem, 5vw, 4rem) clamp(2.5rem, 5vw, 4rem)" }}
        >
            <span style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c47820", marginBottom: 14 }}>Fale conosco</span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(2rem, 5.5vw, 4.5rem)", color: "#f5e8d0", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                Adoramos receber<br /><span style={{ color: "#c47820" }}>sua mensagem.</span>
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.3vw, 15px)", color: "rgba(245,232,208,0.65)", lineHeight: 1.75 }}>
                Pedidos, dúvidas, encomendas ou só um oi — estamos no WhatsApp e respondemos rapidinho.
            </p>
        </div>
    </section>
  );
}