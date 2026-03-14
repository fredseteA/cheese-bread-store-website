import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5522981382606";

export function Footer() {
  return (
    <footer style={{ background: "#1a0f05", borderTop: "1px solid rgba(245,220,160,0.08)" }}>
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        style={{
          maxWidth: 1100,
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)",
        }}
      >
        {/* ── Marca ── */}
        <div>
          <div className="flex flex-col items-start gap-3 mb-4">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{height: 36, background: "rgba(245,220,160,0.12)", border: "1.5px solid rgba(245,220,160,0.3)" }}
            >
              <img
                src="/logo-quadrada.png"
                alt="Pão de Queijo Mineiro"
                style={{
                  height: 60,
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: 8,
                }}
              />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 13, color: "rgba(245,232,208,0.45)", lineHeight: 1.75 }}>
              <br />O autêntico sabor de Minas Gerais em cada mordida. <br />Produção artesanal com Queijo Canastra legítimo, direto de Iguatama — MG.
            </p>
          </div>
        </div>

        {/* ── Contato ── */}
        <div>
          <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 15, color: "#f5e8d0", marginBottom: 16 }}>
            Contato
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,232,208,0.55)", textDecoration: "none" }}
              >
                <MessageCircle style={{ width: 14, height: 14, color: "#c47820", flexShrink: 0 }} />
                (22) 98138-2606
              </a>
            </li>
            <li>
              <span className="flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,232,208,0.55)" }}>
                <MapPin style={{ width: 14, height: 14, color: "#c47820", flexShrink: 0 }} />
                Campos dos Goytacazes — RJ
              </span>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,232,208,0.55)", textDecoration: "none" }}
              >
                <Instagram style={{ width: 14, height: 14, color: "#c47820", flexShrink: 0 }} />
                @pao_de_queijo_mineiro_rj
              </a>
            </li>
          </ul>
        </div>

        {/* ── Links ── */}
        <div>
          <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 15, color: "#f5e8d0", marginBottom: 16 }}>
            Navegação
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Início",   to: "/" },
              { label: "Produtos", to: "/#produtos" },
              { label: "Sobre nós", to: "/AboutUs" },
              { label: "Contato",  to: "/contact" },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,232,208,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,232,208,0.85)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,232,208,0.45)")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div
        className="mx-auto text-center"
        style={{
          maxWidth: 1100,
          padding: "1.25rem clamp(1.5rem, 4vw, 3rem)",
          borderTop: "1px solid rgba(245,220,160,0.06)",
        }}
      >
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(245,232,208,0.25)", letterSpacing: "0.02em" }}>
          © {new Date().getFullYear()} Pão de Queijo Mineiro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}