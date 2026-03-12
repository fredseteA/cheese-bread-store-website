import heroImage from "@/assets/hero-pao-de-queijo.jpg";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f0b429", height: "clamp(420px, 60vw, 680px)" }}
    >
      {/* ── Imagem: ocupa ~65% lado direito, altura 100%, sem gap ── */}
      <div className="absolute inset-y-0 right-0" style={{ width: "65%" }}>
        <img
          src={heroImage}
          alt="Pão de Queijo Mineiro artesanal"
          className="w-full h-full object-cover object-center"
        />
        {/* Fade suave da imagem para o fundo amarelo */}
        <div
          className="absolute inset-y-0 left-0 w-28 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #f0b429, transparent)",
          }}
        />
      </div>

      {/* ── Área esquerda: card verde centralizado verticalmente ── */}
      <div
        className="absolute inset-y-0 left-0 flex items-center"
        style={{ width: "38%", paddingLeft: "clamp(1.25rem, 4vw, 4.5rem)" }}
      >
        <div
          className="rounded-2xl w-full max-w-[280px]"
          style={{ backgroundColor: "#3d6b35", padding: "clamp(1.25rem, 2.5vw, 2rem)" }}
        >
          {/* Estrelas + texto de avaliação */}
          <div className="flex items-center gap-1 flex-wrap mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="fill-current shrink-0"
                style={{ color: "#f0b429", width: "13px", height: "13px" }}
              />
            ))}
            <span
              className="text-xs leading-tight ml-0.5"
              style={{ color: "#b8d9b0" }}
            >
              Adorado por centenas de clientes
            </span>
          </div>

          {/* Título grande bold uppercase */}
          <h1
            className="font-black uppercase text-white leading-none mb-5"
            style={{
              fontSize: "clamp(1.35rem, 2.6vw, 2.25rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            Pão de Queijo
            <br />
            Mineiro
            <br />
            Artesanal!
          </h1>

          {/* Botão pill amarelo */}
          <a
            href="#produtos"
            className="flex items-center justify-center w-full font-bold uppercase rounded-full transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#f0b429",
              color: "#1a1200",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              padding: "0.6rem 1.25rem",
            }}
          >
            Ver produtos
          </a>
        </div>
      </div>
    </section>
  );
}
