export function HeroSection() {
  return (
    <section
      className="relative w-full"
      style={{ height: "clamp(480px, 52vw, 720px)" }}
    >
      {/* ── Imagem ocupa 100% do hero ── */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-image.png"
          alt="Pão de Queijo Mineiro artesanal"
          className="w-full h-full object-cover object-[center_65%] block"
        />
      </div>

      {/* ── Conteúdo: canto inferior esquerdo sobre a foto ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          zIndex: 5,
          padding: "0 clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vw, 5.5rem)",
        }}
      >
        {/* Título serif grande */}
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 6vw, 5.2rem)",
            color: "#f5e8d0",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "0.6rem",
          }}
        >
          Pão de Queijo<br />Mineiro
        </h1>

        {/* Subtítulo leve */}
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(12px, 1.4vw, 14px)",
            color: "rgba(245,232,208,0.72)",
            lineHeight: 1.65,
            maxWidth: 380,
            marginBottom: "1.5rem",
            letterSpacing: "0.01em",
          }}
        >
          Feito artesanalmente com Queijo Canastra legítimo.<br />
          Sabor genuíno de Minas direto na sua porta.
        </p>

        {/* Botão pill com borda translúcida */}
        <a
          href="#produtos"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "rgba(20,8,0,0.55)",
            border: "1px solid rgba(245,220,160,0.45)",
            color: "#f5e8d0",
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "10px 24px",
            borderRadius: 100,
            textDecoration: "none",
            backdropFilter: "blur(4px)",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.backgroundColor = "rgba(50,20,0,0.75)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.backgroundColor = "rgba(20,8,0,0.55)")
          }
        >
          Explorar produtos →
        </a>
      </div>

    </section>
  );
}