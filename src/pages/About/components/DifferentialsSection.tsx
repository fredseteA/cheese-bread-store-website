import { Heart, Leaf, MapPin, Mountain, Star, Truck } from "lucide-react";
import canastra2 from "@/assets/queijo-canastra-2.jpg";

export function DifferentialsSection() {
  return (
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
                {
                    icon: Mountain,
                    title: "Ingredientes Selecionados",
                    desc: "O premiado Queijo Canastra vem da região da Serra da Canastra, berço do Rio São Francisco. O polvilho é selecionado dos melhores fornecedores do Paraná, e o leite fresco vem diretamente de produtores locais."
                },
                { 
                    icon: Leaf,
                    title: "Receita de família",
                    desc: "A fórmula nunca foi industrializada. É a mesma passada de geração em geração, feita à mão, com tempo e cuidado." },
                { 
                    icon: Heart,
                    title: "Feito com carinho",
                    desc: "Cada lote é preparado pessoalmente. Não há escala que justifique abrir mão da qualidade — isso é princípio." },
                { 
                    icon: Star,
                    title: "Queijo Canastra DOP",
                    desc: "Usamos apenas o queijo com Denominação de Origem Protegida, garantia do sabor único das montanhas mineiras." },
                { 
                    icon: Truck,
                    title: "Direto para sua porta",
                    desc: "Embalado com cuidado e enviado rapidamente para que você receba com a frescura e qualidade que merece." },
                { 
                    icon: MapPin,   title: "Alma mineira",              desc: "Não vendemos só pão de queijo. Levamos um pedaço de Minas, da cultura e da hospitalidade mineira para a sua mesa." },
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
  );
}