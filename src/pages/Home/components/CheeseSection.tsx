import heroCanastra from "@/assets/hero-queijo-canastra.jpg";
import canastra1 from "@/assets/queijo-canastra-1.jpg";
import canastra2 from "@/assets/queijo-canastra-2.jpg";
import canastra3 from "@/assets/queijo-canastra-3.jpg";
import canastra4 from "@/assets/serra-da-canastra.jpg";

export function CheeseSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden"
      style={{ background: "#0e0600" }}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={canastra4}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,4,0,0.88) 0%, rgba(10,4,0,0.78) 50%, rgba(10,4,0,0.92) 100%)",
          }}
        />
      </div>
      <div
        className="relative z-10 mx-auto"
        style={{
          maxWidth: 960,
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2rem)",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#c47820",
            marginBottom: 14,
            textAlign: "center",
          }}
        >
          Ingrediente principal
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#f5e8d0",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginBottom: "clamp(0.75rem, 1.5vw, 1rem)",
          }}
        >
          Queijo Canastra{" "}
          <span style={{ color: "#c47820" }}>Legítimo</span>
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(12px, 1.2vw, 14px)",
            color: "rgba(245,232,208,0.6)",
            lineHeight: 1.75,
            maxWidth: 500,
            margin: "0 auto clamp(2rem, 4vw, 3.5rem)",
            textAlign: "center",
          }}
        >
          Produzido nas montanhas da Serra da Canastra, em Minas Gerais,
          este queijo artesanal com denominação de origem é o segredo do
          sabor inconfundível do nosso pão de queijo.
        </p>
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: "1.6fr 1fr 1fr" }}
        >
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              gridRow: "1 / 3",
              height: "clamp(280px, 32vw, 420px)",
            }}
          >
            <img
              src={heroCanastra}
              alt="Queijo Canastra legítimo"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(10,4,0,0.4) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0"
              style={{ padding: "1.25rem" }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(13px, 1.4vw, 16px)",
                  color: "#f5e8d0",
                  lineHeight: 1.2,
                }}
              >
                Produção
                <br />artesanal
              </p>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ height: "clamp(136px, 15vw, 204px)" }}
          >
            <img
              src={canastra1}
              alt="Serra da Canastra"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,4,0,0.2)" }} />
          </div>
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ height: "clamp(136px, 15vw, 204px)" }}
          >
            <img
              src={canastra2}
              alt="Queijo curado"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,4,0,0.2)" }} />
          </div>
          <div
            className="relative overflow-hidden rounded-2xl col-start-2"
            style={{ height: "clamp(136px, 15vw, 204px)" }}
          >
            <img
              src={canastra3}
              alt="Queijo Canastra maturado"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,4,0,0.2)" }} />
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 mt-12"
          style={{
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
            borderTop: "1px solid rgba(245,220,160,0.1)",
            paddingTop: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          {[
            {
              num: "400+",
              label: "Anos de tradição",
              desc: "Receita transmitida de geração em geração nas montanhas mineiras.",
            },
            {
              num: "DOP",
              label: "Denominação de origem",
              desc: "Certificação que garante autenticidade e procedência do queijo.",
            },
            {
              num: "100%",
              label: "Leite cru integral",
              desc: "Sem pasteurização — preserva aromas e sabores únicos da Serra.",
            },
          ].map(({ num, label, desc }) => (
            <div key={label} className="text-center sm:text-left">
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 3vw, 38px)",
                  color: "#c47820",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {num}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#f5e8d0",
                  letterSpacing: "0.04em",
                  marginBottom: 5,
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 12,
                  color: "rgba(245,232,208,0.48)",
                  lineHeight: 1.65,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}