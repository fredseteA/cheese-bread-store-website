import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product, CartItem } from "@/types/product";
import { initialProducts } from "@/data/products";

interface StoreContextType {
  products: Product[];
  cart: CartItem[];
  isAdminMode: boolean;
  // Funções de gestão de estoque
  updateStock: (productId: string, newStock: number) => void;
  toggleAdminMode: () => void;
  // Funções do carrinho
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Atualizar estoque de um produto
  const updateStock = (productId: string, newStock: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, stock: Math.max(0, newStock) }
          : product
      )
    );
  };

  // Alternar modo admin
  const toggleAdminMode = () => {
    setIsAdminMode((prev) => !prev);
  };

  // Adicionar produto ao carrinho
  const addToCart = (product: Product) => {
    if (product.stock <= 0) return;

    setCart((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  // Remover produto do carrinho
  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Atualizar quantidade no carrinho
  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.min(quantity, item.product.stock) }
          : item
      )
    );
  };

  // Limpar carrinho
  const clearCart = () => {
    setCart([]);
  };

  // Calcular total do carrinho
  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  // Contar itens no carrinho
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        isAdminMode,
        updateStock,
        toggleAdminMode,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
