import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/features/carts/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, updateCartQuantity, removeFromCart, clearCart, checkoutCart, getCartTotal } = useStore();

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const sendToWhatsApp = async () => {
    if (cart.length === 0) return;

    const items = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.product.name} - ${formatPrice(item.product.price * item.quantity)}`
      )
      .join("\n");

    const total = formatPrice(getCartTotal());
    const message = `Olá! Gostaria de fazer um pedido:\n\n${items}\n\n*Total: ${total}* + Frete`;

    const phoneNumber = "5522981382606";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    await checkoutCart();
    onClose();
  };

    return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md bg-background flex flex-col h-full p-0">
        <SheetHeader className="border-b border-border px-6 pt-6 pb-4 shrink-0">
          <SheetTitle className="flex items-center gap-2 font-display text-xl">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground font-body">
              Seu carrinho está vazio
            </p>
            <Button variant="outline" onClick={onClose} className="mt-4">
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <div className="flex flex-col flex-1 min-h-0">
            {/* Lista de itens */}
            <div className="flex-1 overflow-y-auto min-h-0 py-4 px-6 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-lg bg-card"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-card-foreground">
                      {item.product.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      {formatPrice(item.product.price)} / pacote
                    </p>

                    {/* Controles de quantidade */}
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateCartQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>

                      <span className="w-8 text-center font-body font-semibold">
                        {item.quantity}
                      </span>

                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateCartQuantity(item.product.id, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.product.stock}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer do carrinho */}
            <div
              className="border-t border-border pt-4 px-6 space-y-4 shrink-0"
              style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
            >
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-body">
                  Total ({cart.reduce((acc, item) => acc + item.quantity, 0)} pacotes)
                </span>
                <span className="text-2xl font-bold text-primary font-body">
                  {formatPrice(getCartTotal())}
                </span>
              </div>

              <Button
                variant="whatsapp"
                className="w-full"
                size="lg"
                onClick={sendToWhatsApp}
              >
                Finalizar pelo WhatsApp
              </Button>

              <Button
                variant="ghost"
                className="w-full text-destructive hover:text-destructive"
                onClick={clearCart}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Limpar Carrinho
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
