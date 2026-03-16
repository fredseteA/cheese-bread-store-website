import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5522981382606";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsappCTASection() {
  return (
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
  );
}