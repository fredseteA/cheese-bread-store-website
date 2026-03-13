import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/contexts/StoreContext";
import { Settings, ShoppingBag } from "lucide-react";

export function ProductList() {
  const { products, isAdminMode } = useStore();

  const minPrice =
    products.length > 0
      ? Math.min(...products.map((p) => p.price)).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      : "R$ 18";

  return (
    <section id="produtos" style={{ background: "#caab8a" }}>

      {/* ══ CABEÇALHO + GRID ══ */}
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          maxWidth: 1200,
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "rgba(139,69,19,0.12)",
              color: "#8b4513",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            Nossos Produtos
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 4vw, 38px)",
              color: "#2a1200",
              letterSpacing: "-0.02em",
              marginBottom: 10,
            }}
          >
            Escolha seu sabor favorito
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "#7a6050",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Todos os nossos pães de queijo são produzidos artesanalmente com
            Queijo Canastra legítimo, garantindo sabor e qualidade incomparáveis.
          </p>

          {isAdminMode && (
            <div
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(139,69,19,0.12)",
                color: "#8b4513",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                border: "1px solid rgba(139,69,19,0.2)",
              }}
            >
              <Settings className="h-4 w-4 animate-spin" style={{ animationDuration: "3s" }} />
              Modo Administrador — edite o estoque nos cards
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* ══ BANNER — MANHÃS MAIS FELIZES ══ */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1rem 3rem",
        }}
      >
        <div
          className="relative rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch"
          style={{ background: "#a37c53", minHeight: "clamp(160px, 20vw, 220px)" }}
        >
          {/* Sombra decorativa */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(139,69,19,0.07) 0%, transparent 70%)" }}
          />

          {/* Esquerda — texto */}
          <div
            className="relative flex flex-col justify-center z-10"
            style={{ padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)", flex: "1 1 55%" }}
          >
            <h3
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(20px, 2.8vw, 28px)", color: "#2a1200", lineHeight: 1.15, marginBottom: 10, letterSpacing: "-0.01em" }}
            >
              Manhãs mais felizes
            </h3>
            <p
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px, 1.1vw, 13px)", color: "rgba(42,18,0,0.65)", lineHeight: 1.7, marginBottom: 20, maxWidth: 340 }}
            >
              Comece o dia com o sabor genuíno de Minas. Nosso pão de queijo artesanal é o
              acompanhamento perfeito para o seu café — fresquinho, crocante por fora e macio por dentro.
            </p>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-full self-start transition-opacity hover:opacity-85"
              style={{ background: "#8b4513", color: "#fff", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.09em", textTransform: "uppercase", padding: "10px 22px", textDecoration: "none" }}
            >
              <ShoppingBag style={{ width: 13, height: 13 }} />
              Peça agora
            </a>
          </div>

          {/* Direita — imagem */}
          <div
            className="relative flex-shrink-0 self-stretch w-full md:w-auto"
            style={{ flex: "1 1 45%", minHeight: 180 }}
          >
            <img
              src="/src/assets/pao-tradicional-horizontal.jpeg"
              alt="Pão de queijo no café da manhã"
              className="w-full h-full object-cover"
              style={{ minHeight: 180 }}
            />
            <div
              className="absolute inset-0 pointer-events-none hidden md:block"
              style={{ 
                background: "linear-gradient(to right, #a37c53 0%, transparent 35%)",
                left: "-1px" // Isso puxa o gradiente 1px para a esquerda, cobrindo a fenda
              }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}