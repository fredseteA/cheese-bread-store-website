import { ShoppingCart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/contexts/StoreContext";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { isAdminMode, toggleAdminMode, getCartCount } = useStore();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg"></span>
          </div>
          <div>
            <h1 className="font-display font-bold text-lg leading-tight text-foreground">
              Pão de Queijo
            </h1>
            <p className="text-xs text-muted-foreground font-body">Mineiro</p>
          </div>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-2">
          {/* Botão Admin */}
          <Button
            variant={isAdminMode ? "secondary" : "ghost"}
            size="icon"
            onClick={toggleAdminMode}
            title={isAdminMode ? "Sair do modo admin" : "Modo admin"}
          >
            <Settings className={`h-5 w-5 ${isAdminMode ? "text-secondary-foreground" : ""}`} />
          </Button>

          {/* Carrinho */}
          <Button
            variant="outline"
            size="icon"
            onClick={onCartClick}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-terracotta text-secondary-foreground"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
