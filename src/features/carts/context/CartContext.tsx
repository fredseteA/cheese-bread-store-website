import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { collection, doc, onSnapshot, updateDoc, increment, writeBatch } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/features/products/types";
import { CartItem } from "@/features/carts/types";
import { initialProducts } from "@/features/products/data/products";

interface CartContextType {
  products: Product[];
  cart: CartItem[];
  isAdminMode: boolean;
  stockLoading: boolean;
  updateStock: (productId: string, newStock: number) => void;
  toggleAdminMode: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  checkoutCart: () => Promise<void>; // NOVO
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [stockLoading, setStockLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts((prev) =>
        prev.map((product) => {
          const liveDoc = snapshot.docs.find((d) => d.id === product.id);
          if (!liveDoc) return product;
          const data = liveDoc.data();
          return { ...product, stock: data.stock ?? product.stock };
        })
      );
      setStockLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateStock = async (productId: string, newStock: number) => {
    const safeStock = Math.max(0, newStock);
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, stock: safeStock } : product
      )
    );
    try {
      await updateDoc(doc(db, "products", productId), { stock: safeStock });
    } catch (err) {
      console.error("Erro ao salvar estoque no Firestore:", err);
    }
  };

  const toggleAdminMode = () => {
    setIsAdminMode((prev) => !prev);
  };

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

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

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

  const clearCart = () => {
    setCart([]);
  };

  // NOVO — roda quando o pedido é finalizado pelo WhatsApp
  const checkoutCart = async () => {
    if (cart.length === 0) return;

    const batch = writeBatch(db);
    cart.forEach((item) => {
      const ref = doc(db, "products", item.product.id);
      batch.update(ref, { stock: increment(-item.quantity) });
    });

    try {
      await batch.commit();
    } catch (err) {
      console.error("Erro ao atualizar estoque no checkout:", err);
    }

    clearCart();
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        isAdminMode,
        stockLoading,
        updateStock,
        toggleAdminMode,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        checkoutCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useStore() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}