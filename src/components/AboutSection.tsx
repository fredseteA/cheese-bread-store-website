import { Heart, Leaf, Mountain, Users } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Mountain,
      title: "Origem Mineira",
      description: "Queijo Canastra legítimo, direto das montanhas de Minas Gerais para sua mesa.",
    },
    {
      icon: Leaf,
      title: "100% Artesanal",
      description: "Produção caseira seguindo receitas tradicionais passadas de geração em geração.",
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada pão de queijo é preparado com carinho e dedicação para garantir o melhor sabor.",
    },
    {
      icon: Users,
      title: "Tradição Familiar",
      description: "Uma empresa familiar que leva a tradição mineira para todo o Brasil.",
    },
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-minas-green/10 text-minas-green text-sm font-body font-semibold mb-4">
            Nossa História
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            O Verdadeiro Sabor de{" "}
            <span className="text-minas-green">Minas Gerais</span>
          </h2>
          
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Há anos levamos o autêntico pão de queijo mineiro para famílias em todo o Brasil. 
            Nossa receita exclusiva utiliza apenas o legítimo{" "}
            <strong className="text-foreground">Queijo Canastra</strong>, 
            reconhecido como patrimônio cultural de Minas Gerais, garantindo um sabor 
            incomparável e uma textura perfeita em cada mordida.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-background shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
