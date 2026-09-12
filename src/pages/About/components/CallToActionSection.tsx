import canastra3 from "@/assets/queijo-canastra-3.jpg";

export function CallToActionSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#2a1200" }}>
        <div
        className="absolute inset-y-0 right-0 hidden lg:block"
        style={{ width: "50%" }}
        >
            <img
                src={canastra3}
                alt="Queijo Canastra e pão de queijo"
                className="w-full h-full object-cover"
                style={{ opacity: 0.55 }}
            />
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #2a1200 0%, transparent 25%)" }}
            />
            </div>

            <div className="relative mx-auto flex flex-col lg:flex-row items-stretch" style={{ maxWidth: 1100 }}>
            <div
                className="flex flex-col justify-center"
                style={{ flex: "1 1 55%", padding: "clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 5vw, 4.5rem)" }}
            >
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c47820", marginBottom: 14 }}>
                Venha provar
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "#f5e8d0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Um pedaço de Minas<br />
                <span style={{ color: "#c47820" }}>na sua casa.</span>
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 15px)", color: "rgba(245,232,208,0.7)", lineHeight: 1.85, marginBottom: "2rem", maxWidth: 420 }}>
                Quem prova entende: o pão de queijo mineiro de verdade não é só receita. É tradição, é origem e é história em cada mordida.
                </p>
                <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full self-start transition-opacity hover:opacity-85"
                style={{ background: "#c47820", color: "#1a0f05", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.09em", textTransform: "uppercase", padding: "12px 28px", textDecoration: "none" }}
                >
                Ver nossos produtos →
                </a>
            </div>

            <div
                className="relative overflow-hidden flex-shrink-0 w-full lg:min-h-[420px]"
                style={{ flex: "1 1 45%" }}
            >
                <img
                src={canastra3}
                alt="Queijo Canastra e pão de queijo"
                className="w-full h-auto object-cover lg:hidden"
                />
            </div>
        </div>
    </section>
  );
}