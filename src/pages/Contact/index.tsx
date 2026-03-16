import heroCanastra from "@/assets/hero-queijo-canastra.jpg";
import { MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const WHATSAPP_NUMBER = "5522981382606";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Contact() {
  return (
    <>
      <Header />

      <div id="contato" style={{ background: "#1a0f05", paddingTop: "clamp(52px, 7vw, 68px)" }}>

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
              Adoramos receber<br /><span style={{ color: "#c47820" }}>sua mensagem.</span>
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.3vw, 15px)", color: "rgba(245,232,208,0.65)", lineHeight: 1.75 }}>
              Pedidos, dúvidas, encomendas ou só um oi — estamos no WhatsApp e respondemos rapidinho.
            </p>
          </div>
        </section>

        {/* ══ CTA WHATSAPP ══ */}
        <section style={{ background: "#1a0f05", padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)" }}>
          <div className="mx-auto text-center" style={{ maxWidth: 600 }}>
            <div className="flex items-center justify-center rounded-full mx-auto mb-6" style={{ width: 72, height: 72, background: "#aa7444", border: "1.5px solid #0a2010" }}>
              <MessageCircle style={{ width: 32, height: 32, color: "#1a0f05" }} />
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
                style={{ background: "#aa7444", color: "#0a2010", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 32px", textDecoration: "none" }}
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