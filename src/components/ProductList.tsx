import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/contexts/StoreContext";
import { Settings } from "lucide-react";

export function ProductList() {
  const { products, isAdminMode } = useStore();

  return (
    <section id="produtos" className="py-16 lg:py-24 bg-pattern">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-body font-semibold mb-4">
            Nossos Produtos
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha seu{" "}
            <span className="text-primary">Sabor Favorito</span>
          </h2>
          
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Todos os nossos pães de queijo são produzidos artesanalmente com 
            Queijo Canastra legítimo, garantindo sabor e qualidade incomparáveis.
          </p>

          {/* Indicador de modo admin */}
          {isAdminMode && (
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-body">
              <Settings className="h-4 w-4 animate-spin" style={{ animationDuration: "3s" }} />
              Modo Administrador Ativado - Edite o estoque diretamente nos cards
            </div>
          )}
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
