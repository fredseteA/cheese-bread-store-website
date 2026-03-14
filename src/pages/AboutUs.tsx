import canastra1 from "@/assets/queijo-horizontal.jpg";
import canastra2 from "@/assets/queijo-canastra-2.jpg";
import canastra3 from "@/assets/queijo-canastra-3.jpg";
import heroCanastra from "@/assets/hero-queijo-canastra.jpg";
import { Heart, Leaf, MapPin, Mountain, Star, Truck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div id="sobre" style={{ background: "#1a0f05", paddingTop: "clamp(52px, 7vw, 68px)" }}>
        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden" style={{ minHeight: "clamp(420px, 55vw, 680px)" }}>
          <img
            src={heroCanastra}
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
              De Iguatama para o Brasil — levamos o pão de queijo do jeito que sempre foi feito: com carinho, com Queijo Canastra de verdade e com a alma de Minas em cada mordida.
            </p>
          </div>
        </section>

        {/* ══ HISTÓRIA DA DONA ══ */}
        <section style={{ background: "#a37c53" }}>
          <div
            className="mx-auto flex flex-col lg:flex-row items-center gap-12"
            style={{ maxWidth: 1100, padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 4.5rem)" }}
          >
            {/* Imagem como card */}
            <div
              className="relative overflow-hidden flex-shrink-0 rounded-2xl w-full lg:w-auto shadow-xl"
              style={{ flex: "0 0 340px", height: 600 }}
            >
              <img
                src={canastra1}
                alt="Produção artesanal"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-4 right-0 flex items-center gap-2"
                style={{ background: "#2a1200", color: "#f5e8d0", padding: "8px 16px 8px 12px", borderRadius: "10px 0 0 10px" }}
              >
                <MapPin style={{ width: 13, height: 13, color: "#c47820" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em" }}>Iguatama, MG</span>
              </div>
            </div>

            {/* Coluna de texto */}
            <div className="flex flex-col justify-center">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#2a1200", marginBottom: 14 }}>
                Quem somos
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "#2a1200", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Uma filha de Minas<br />que não esqueceu<br />de onde veio.
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 15px)", color: "#5a4030", lineHeight: 1.85, marginBottom: "1rem" }}>
                Cresci em <strong style={{ color: "#2a1200", fontWeight: 600 }}>Iguatama</strong>, cidade pequenininha no coração de Minas Gerais, onde o pão de queijo não é receita — é costume. Na minha casa, acordar com o cheiro do forno era tão natural quanto o canto do galo.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 15px)", color: "#5a4030", lineHeight: 1.85, marginBottom: "1rem" }}>
                Quando me mudei, senti falta daquele sabor que nenhuma padaria conseguia reproduzir. Foi então que decidi trazer o <strong style={{ color: "#2a1200", fontWeight: 600 }}>Queijo Canastra legítimo</strong>, o polvilho de qualidade e a receita da minha família.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 15px)", color: "#5a4030", lineHeight: 1.85 }}>
                Hoje, cada pacote que sai daqui carrega um pedaço de Iguatama. Os ingredientes vêm de lá. A receita veio de lá. E o amor também.
              </p>
            </div>
          </div>
        </section>

        {/* ══ DIFERENCIAIS ══ */}
        <section className="relative overflow-hidden" style={{ background: "#0e0600" }}>
          <img src={canastra2} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,4,0,0.6) 0%, rgba(10,4,0,0.5) 100%)" }} />

          <div className="relative z-10 mx-auto" style={{ maxWidth: 1000, padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)" }}>
            <div className="text-center mb-12">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c47820", marginBottom: 12, display: "block" }}>O que nos faz diferentes</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#f5e8d0", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Tradição que se <span style={{ color: "#c47820" }}>sente no sabor</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Mountain, title: "Ingredientes de Iguatama", desc: "O Queijo Canastra, o polvilho e os demais ingredientes vêm diretamente de Minas Gerais — sem atalhos, sem substitutos." },
                { icon: Leaf,     title: "Receita de família",        desc: "A fórmula nunca foi industrializada. É a mesma passada de geração em geração, feita à mão, com tempo e cuidado." },
                { icon: Heart,    title: "Feito com carinho",         desc: "Cada lote é preparado pessoalmente. Não há escala que justifique abrir mão da qualidade — isso é princípio." },
                { icon: Star,     title: "Queijo Canastra DOP",       desc: "Usamos apenas o queijo com Denominação de Origem Protegida, garantia do sabor único das montanhas mineiras." },
                { icon: Truck,    title: "Direto para sua porta",     desc: "Embalado com cuidado e enviado rapidamente para que você receba com a frescura e qualidade que merece." },
                { icon: MapPin,   title: "Alma mineira",              desc: "Não vendemos só pão de queijo. Levamos um pedaço de Minas, da cultura e da hospitalidade mineira para a sua mesa." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col"
                  style={{ background: "rgba(245,220,160,0.05)", border: "1px solid rgba(245,220,160,0.1)", borderRadius: 16, padding: "clamp(1.25rem, 2vw, 1.75rem)", transition: "background 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(245,220,160,0.09)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(245,220,160,0.05)")}
                >
                  <div className="flex items-center justify-center rounded-full mb-4 flex-shrink-0" style={{ width: 44, height: 44, background: "rgba(196,120,32,0.15)", border: "1px solid rgba(196,120,32,0.3)" }}>
                    <Icon style={{ width: 18, height: 18, color: "#c47820" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(14px, 1.3vw, 16px)", color: "#f5e8d0", marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 13, color: "rgba(245,232,208,0.55)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAIXA FINAL ══ */}
        <section className="relative overflow-hidden" style={{ background: "#a37c53" }}>
          <div
            className="absolute inset-y-0 right-0 hidden lg:block"
            style={{ width: "50%" }}
          >
            <img
              src={canastra3}
              alt="Queijo Canastra e pão de queijo"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #a37c53 0%, transparent 20%)" }}
            />
          </div>

          <div className="relative mx-auto flex flex-col lg:flex-row items-stretch" style={{ maxWidth: 1100 }}>
            <div
              className="flex flex-col justify-center"
              style={{ flex: "1 1 55%", padding: "clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 5vw, 4.5rem)" }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#46220f", marginBottom: 14 }}>
                Venha provar
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "#2a1200", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Um pedaço de Iguatama<br />
                <span style={{ color: "#8b4513" }}>na sua casa.</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 15px)", color: "#46220f", lineHeight: 1.85, marginBottom: "2rem", maxWidth: 420 }}>
                Quem prova uma vez entende por que o pão de queijo mineiro é diferente de qualquer outro. Não é só a receita — é a terra, é a gente, é a história que vai junto.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full self-start transition-opacity hover:opacity-85"
                style={{ background: "#46220f", color: "#fff", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.09em", textTransform: "uppercase", padding: "12px 28px", textDecoration: "none" }}
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
      </div>
      <Footer />
    </>
  );
}