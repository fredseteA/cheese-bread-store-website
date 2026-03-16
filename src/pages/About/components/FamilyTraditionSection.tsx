export function FamilyTraditionSection() {
  return (
    <section style={{ background: "#2a1200" }}>
        <div
        className="mx-auto flex flex-col items-center"
        style={{ maxWidth: 720, padding: "clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem)" }}
        >
            {/* Label superior */}
            <span
                style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#c47820",
                marginBottom: 16,
                display: "block",
                textAlign: "center",
                }}
            >
                Uma homenagem
            </span>

            {/* Título */}
            <h2
                style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                color: "#f5e8d0",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                textAlign: "center",
                }}
            >
                Tradição que{" "}
                <span style={{ color: "#c47820" }}>continua</span>
            </h2>

            {/* Divisor decorativo */}
            <div
                style={{
                width: 40,
                height: 2,
                background: "rgba(196,120,32,0.4)",
                borderRadius: 2,
                marginBottom: "2rem",
                }}
            />

            {/* Parágrafos */}
            <p
                style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(13px, 1.2vw, 15px)",
                color: "rgba(245,232,208,0.7)",
                lineHeight: 1.85,
                marginBottom: "1.25rem",
                textAlign: "center",
                }}
            >
                Ao escaldar o polvilho, uma oração é sempre feita pela alma da{" "}
                <strong style={{ color: "#f5e8d0", fontWeight: 600 }}>vó Geni</strong>.
            </p>
            <p
                style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(13px, 1.2vw, 15px)",
                color: "rgba(245,232,208,0.7)",
                lineHeight: 1.85,
                marginBottom: "2.5rem",
                textAlign: "center",
                }}
            >
                É impossível não lembrar das tardes na rua 18 da minha infância, das receitas feitas com calma
                e do carinho com que ela preparava cada quitanda.
            </p>

            {/* Bloco de destaque — citação */}
            <div
                style={{
                borderLeft: "3px solid #c47820",
                background: "rgba(196,120,32,0.07)",
                borderRadius: "0 12px 12px 0",
                padding: "clamp(1.25rem, 2.5vw, 1.75rem) clamp(1.25rem, 3vw, 2rem)",
                width: "100%",
                }}
            >
                <p
                style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "clamp(14px, 1.4vw, 16px)",
                    color: "rgba(245,232,208,0.85)",
                    lineHeight: 1.8,
                    margin: 0,
                }}
                >
                Hoje, cada fornada carrega um pouco dessa memória. É uma forma de manter viva a tradição
                da culinária familiar mineira e levar para cada casa um pedaço dessa história.
                </p>
            </div>
        </div>
    </section>
  );
};
