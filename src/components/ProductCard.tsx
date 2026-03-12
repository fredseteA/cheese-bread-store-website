import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/types/product";
import { useStore } from "@/contexts/StoreContext";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { isAdminMode, updateStock, addToCart } = useStore();
  const isAvailable = product.stock > 0;

  // Formatar preço em Real brasileiro
  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  // Adicionar ao carrinho com feedback
  const handleAddToCart = () => {
    if (!isAvailable) return;
    addToCart(product);
    toast({
      title: "Adicionado ao carrinho!",
      description: `${product.name} foi adicionado.`,
    });
  };

  // Controles de estoque (modo admin)
  const handleStockChange = (newStock: number) => {
    updateStock(product.id, newStock);
  };

  return (
    <div className={`group relative bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated ${!isAvailable ? "opacity-75" : ""}`}>
      {/* Badge de destaque para recheados */}
      {product.isStuffed && (
        <Badge className="absolute top-4 left-4 z-10 bg-terracotta text-secondary-foreground font-body">
          <Star className="h-3 w-3 mr-1" />
          Recheado
        </Badge>
      )}

      {/* Badge de esgotado */}
      {!isAvailable && (
        <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground font-body">
          Esgotado
        </Badge>
      )}

      {/* Imagem do produto */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isAvailable ? "group-hover:scale-105" : "grayscale"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Informações do produto */}
      <div className="p-5">
        <h3 className="font-display font-bold text-xl text-card-foreground mb-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Preço e quantidade */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-primary font-body">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs text-muted-foreground font-body">
              Pacote com 30 unidades
            </p>
          </div>
          
          {/* Indicador de disponibilidade */}
          <div className={`text-sm font-body font-medium ${isAvailable ? "text-minas-green" : "text-destructive"}`}>
            {isAvailable ? `${product.stock} disponíveis` : "Indisponível"}
          </div>
        </div>

        {/* Controles de admin */}
        {isAdminMode && (
          <div className="mb-4 p-3 rounded-lg bg-muted">
            <p className="text-xs text-muted-foreground font-body mb-2">
              Gerenciar estoque:
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleStockChange(product.stock - 1)}
                disabled={product.stock <= 0}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <Input
                type="number"
                value={product.stock}
                onChange={(e) => handleStockChange(parseInt(e.target.value) || 0)}
                className="h-8 w-16 text-center font-body"
                min="0"
              />
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleStockChange(product.stock + 1)}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Botão de compra */}
        <Button
          variant={isAvailable ? "cart" : "soldout"}
          className="w-full"
          onClick={handleAddToCart}
          disabled={!isAvailable}
        >
          {isAvailable ? (
            <>
              <ShoppingCart className="h-4 w-4" />
              Adicionar ao Carrinho
            </>
          ) : (
            "Produto Esgotado"
          )}
        </Button>
      </div>
    </div>
  );
}
