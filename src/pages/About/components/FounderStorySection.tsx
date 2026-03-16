import canastra1 from "@/assets/queijo-horizontal.jpg";
import { MapPin } from "lucide-react";

export function FounderStorySection() {
  return (
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
                Cresci em <strong style={{ color: "#2a1200", fontWeight: 600 }}>Iguatama</strong>, uma cidade pequenininha no coração de Minas Gerais, onde fazer quitanda é tradição. Quitanda, para nós mineiros, são aqueles lanches caseiros preparados na hora para o café da manhã ou da tarde — simples, fresquinhos e cheios de afeto.
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 15px)", color: "#5a4030", lineHeight: 1.85, marginBottom: "1rem" }}>
                Na minha família, essa tradição sempre esteve presente. Minha mãe, <strong style={{ color: "#2a1200", fontWeight: 600 }}>Marília</strong>, e minha avó <strong style={{ color: "#2a1200", fontWeight: 600 }}>Geni</strong> sempre foram excelentes quitandeiras. Fazer pão de queijo para elas nunca foi apenas uma receita — era parte da vida.
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 15px)", color: "#5a4030", lineHeight: 1.85, marginBottom: "1rem" }}>
                Quando me mudei, senti falta daquele sabor que nenhuma padaria conseguia reproduzir. Foi então que comecei a testar, experimentar e refazer a receita que está no paladar dos mineiros o dia inteiro.
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 15px)", color: "#5a4030", lineHeight: 1.85 }}>
                E de tanto testar, nasceu a oportunidade de oferecer ao público campista o <strong style={{ color: "#2a1200", fontWeight: 600 }}>pão de queijo mineiro de verdade</strong> — o caseiro, o original. E o trem ficou bão. Quem experimenta, ama.
              </p>
            </div>
          </div>
    </section>
  );
}