import heroCanastra from "@/assets/hero-queijo-canastra.jpg";
import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WHATSAPP_NUMBER = "5522981382606";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Contact() {
  return (
    <>
      <Header />

      <div id="contato" style={{ background: "#8b4513", paddingTop: "clamp(52px, 7vw, 68px)" }}>

        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden" style={{ minHeight: "clamp(280px, 35vw, 440px)" }}>
          <img src={heroCanastra} alt="Contato" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 50%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,4,0,0.92) 0%, rgba(10,4,0,0.6) 50%, rgba(10,4,0,0.35) 100%)" }} />

          <div
            className="absolute bottom-0 text-center"
            style={{ left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 700, padding: "0 clamp(1.5rem, 5vw, 4rem) clamp(2.5rem, 5vw, 4rem)" }}
          >
            <span style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c47820", marginBottom: 14 }}>Fale conosco</span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(2rem, 5.5vw, 4.5rem)", color: "#f5e8d0", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              A gente adora<br /><span style={{ color: "#c47820" }}>receber mensagem.</span>
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.3vw, 15px)", color: "rgba(245,232,208,0.65)", lineHeight: 1.75 }}>
              Pedidos, dúvidas, encomendas ou só um oi — estamos no WhatsApp e respondemos rapidinho.
            </p>
          </div>
        </section>

        {/* ══ CTA WHATSAPP ══ */}
        <section style={{ background: "#2a1200", padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)" }}>
          <div className="mx-auto text-center" style={{ maxWidth: 600 }}>
            <div className="flex items-center justify-center rounded-full mx-auto mb-6" style={{ width: 72, height: 72, background: "rgba(37,211,102,0.12)", border: "1.5px solid rgba(37,211,102,0.3)" }}>
              <MessageCircle style={{ width: 32, height: 32, color: "#25d366" }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#f5e8d0", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 12 }}>
              Faça seu pedido agora
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 15px)", color: "rgba(245,232,208,0.55)", lineHeight: 1.75, marginBottom: 32 }}>
              Clique abaixo e vá direto para o nosso WhatsApp. Atendemos pedidos, encomendas para eventos e tiramos todas as suas dúvidas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a href={getWhatsAppLink("Olá! Quero fazer um pedido de pão de queijo 🧀")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full transition-all hover:opacity-90 active:scale-95 w-full sm:w-auto justify-center"
                style={{ background: "#25d366", color: "#0a2010", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 32px", textDecoration: "none" }}
              >
                <MessageCircle style={{ width: 16, height: 16 }} />
                Fazer pedido
              </a>
              <a href={getWhatsAppLink("Olá! Tenho uma dúvida sobre os produtos 😊")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full transition-all hover:opacity-90 active:scale-95 w-full sm:w-auto justify-center"
                style={{ background: "transparent", color: "#f5e8d0", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "13px 32px", textDecoration: "none", border: "1px solid rgba(245,220,160,0.3)" }}
              >
                Tirar dúvidas
              </a>
            </div>

            <a href={`tel:+${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,232,208,0.4)", textDecoration: "none", letterSpacing: "0.04em" }}
            >
              <Phone style={{ width: 13, height: 13 }} />
              (22) 98138-2606
            </a>
          </div>
        </section>

        {/* ══ CARDS INFO ══ */}
        <section style={{ padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)" }}>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5" style={{ maxWidth: 900 }}>
            {[
              {
                icon: MapPin,
                title: "Origem dos ingredientes",
                content: (<p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#7a6050", lineHeight: 1.7 }}><strong style={{ color: "#2a1200" }}>Iguatama, MG</strong><br />Serra da Canastra<br />Minas Gerais, Brasil</p>),
              },
              {
                icon: Instagram,
                title: "Redes sociais",
                content: (
                  <>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#7a6050", lineHeight: 1.7, marginBottom: 12 }}>Acompanhe novidades,<br />promoções e bastidores<br />da nossa produção.</p>
                    <a href="https://www.instagram.com/pao_de_queijo_mineiro_rj/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full transition-opacity hover:opacity-80"
                      style={{ background: "#8b4513", color: "#fff", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.07em", textTransform: "uppercase", padding: "8px 18px", textDecoration: "none" }}
                    >
                      <Instagram style={{ width: 12, height: 12 }} />
                      Seguir
                    </a>
                  </>
                ),
              },
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="flex flex-col items-center text-center rounded-2xl"
                style={{ background: "#fff", padding: "clamp(1.5rem, 3vw, 2.5rem) 1.5rem", boxShadow: "0 2px 16px rgba(61,28,0,0.08)" }}
              >
                <div className="flex items-center justify-center rounded-full mb-4" style={{ width: 48, height: 48, background: "rgba(139,69,19,0.1)", border: "1px solid rgba(139,69,19,0.2)" }}>
                  <Icon style={{ width: 20, height: 20, color: "#8b4513" }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 16, color: "#2a1200", marginBottom: 8 }}>{title}</h3>
                {content}
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAIXA FINAL ══ */}
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

      </div>

      <Footer />
    </>
  );
}