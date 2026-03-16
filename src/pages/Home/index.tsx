import { useState } from "react";
import { StoreProvider } from "@/features/carts/context/CartContext";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/pages/Home/components/HeroSection";
import { ProductList } from "@/features/products/components/ProductList";
import { QueijoCanastra } from "@/pages/Home/components/QueijoCanastra";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/features/carts/components/CartDrawer";
import { WhatsAppButton } from "@/features/whatsapp/WhatsAppButton";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <main>
          <HeroSection />
          <ProductList />
          <QueijoCanastra />
        </main>
        
        <Footer />
        
        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <WhatsAppButton />
      </div>
    </StoreProvider>
  );
};

export default Index;
