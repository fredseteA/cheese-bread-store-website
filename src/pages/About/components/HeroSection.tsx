import heroImage from "@/assets/hero-queijo-canastra.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "clamp(420px, 55vw, 680px)" }}>
        <img
        src={heroImage}
        alt="Serra da Canastra, Minas Gerais"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,4,0,0.92) 0%, rgba(10,4,0,0.55) 45%, rgba(10,4,0,0.3) 100%)" }} />
        <div
        className="absolute bottom-0 left-0 right-0"
        style={{ maxWidth: 900, padding: "0 clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)" }}
        >
        <span style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c47820", marginBottom: 14 }}>
            Nossa história
        </span>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(2.2rem, 6vw, 5rem)", color: "#f5e8d0", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Nascida em Minas,<br />
            <span style={{ color: "#c47820" }}>criada na tradição.</span>
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.4vw, 15px)", color: "rgba(245,232,208,0.7)", lineHeight: 1.75, maxWidth: 520 }}>
            De Iguatama para Campos — levamos o pão de queijo do jeito que sempre foi feito: com Queijo Canastra legítimo, ingredientes de origem e a alma da culinária mineira em cada fornada.
        </p>
        </div>
    </section>
  );
}