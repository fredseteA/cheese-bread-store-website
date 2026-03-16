export function FinalCTASection() {
  return (
    <section style={{ background: "#2a1200", padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="mx-auto text-center" style={{ maxWidth: 580 }}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#f5e8d0", lineHeight: 1.6, marginBottom: 16 }}>
                "Cada pão que faço é feito com a memória das manhãs em Iguatama. Quando você prova, um pedaço de Minas chega até você."
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c47820" }}>
                — Maria Cecília de Carvalho Silva Luna
            </p>
        </div>
    </section>
  );
}