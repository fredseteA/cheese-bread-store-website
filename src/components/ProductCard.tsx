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

  const formatPrice = (price: number) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleAddToCart = () => {
    if (!isAvailable) return;
    addToCart(product);
    toast({
      title: "Adicionado ao carrinho!",
      description: `${product.name} foi adicionado.`,
    });
  };

  const handleStockChange = (newStock: number) => {
    updateStock(product.id, newStock);
  };

  return (
    <div
      className={`group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        !isAvailable ? "opacity-70" : ""
      }`}
      style={{ 
        boxShadow: "0 2px 16px rgba(61,28,0,0.09)", 
        background: "#f7dbbb",
      }}
    >
      {/* ── Imagem — altura fixa pequena no mobile ── */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isAvailable ? "group-hover:scale-105" : "grayscale"
          }`}
        />

        {product.isStuffed && (
          <Badge className="absolute top-3 left-3 z-10 bg-terracotta text-secondary-foreground font-body">
            <Star className="h-3 w-3 mr-1" />
            Recheado
          </Badge>
        )}

        {!isAvailable && (
          <Badge className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground font-body">
            Esgotado
          </Badge>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* ── Conteúdo ── */}
      <div className="flex flex-col flex-1 p-3">
        <h3
          className="font-bold mb-1 leading-snug"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(13px, 1.1vw, 15px)",
            color: "#2a1200",
          }}
        >
          {product.name}
        </h3>

        <p
          className="line-clamp-2 mb-2 flex-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: "#7a6050",
            lineHeight: 1.5,
          }}
        >
          {product.description}
        </p>

        {/* Preço + estoque */}
        <div className="flex items-end justify-between mb-2.5">
          <div>
            <span
              className="font-bold block"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(14px, 1.3vw, 17px)",
                color: "#8b4513",
              }}
            >
              {formatPrice(product.price)}
            </span>
            <span style={{ fontSize: 10, color: "#a08070", fontFamily: "'Inter', sans-serif" }}>
              Pacote com 30 un.
            </span>
          </div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: isAvailable ? "#4a7c3f" : "#c0392b",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {isAvailable ? `${product.stock} disp.` : "Indisponível"}
          </span>
        </div>

        {/* Controles admin */}
        {isAdminMode && (
          <div className="mb-2.5 p-2 rounded-xl" style={{ background: "#f5ede0" }}>
            <p style={{ fontSize: 10, color: "#7a6050", marginBottom: 5, fontFamily: "'Inter', sans-serif" }}>
              Estoque:
            </p>
            <div className="flex items-center gap-1.5">
              <Button
                variant="outline" size="icon"
                onClick={() => handleStockChange(product.stock - 1)}
                disabled={product.stock <= 0}
                className="h-6 w-6"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Input
                type="number"
                value={product.stock}
                onChange={(e) => handleStockChange(parseInt(e.target.value) || 0)}
                className="h-6 w-12 text-center text-xs font-body"
                min="0"
              />
              <Button
                variant="outline" size="icon"
                onClick={() => handleStockChange(product.stock + 1)}
                className="h-6 w-6"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
        )}

        {/* Botão */}
        <button
          onClick={handleAddToCart}
          disabled={!isAvailable}
          className="w-full flex items-center justify-center gap-1.5 rounded-full font-bold transition-all hover:opacity-88 active:scale-95 disabled:cursor-not-allowed"
          style={{
            background: isAvailable ? "#8b4513" : "#d0c0b0",
            color: isAvailable ? "#fff" : "#9a8a7a",
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            padding: "8px 12px",
            border: "none",
            cursor: isAvailable ? "pointer" : "not-allowed",
          }}
        >
          {isAvailable ? (
            <>
              <ShoppingCart style={{ width: 12, height: 12 }} />
              Adicionar
            </>
          ) : (
            "Esgotado"
          )}
        </button>
      </div>
    </div>
  );
}