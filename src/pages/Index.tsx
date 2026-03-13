import { useState } from "react";
import { StoreProvider } from "@/contexts/StoreContext";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductList } from "@/components/ProductList";
import { QueijoCanastra } from "@/components/QueijoCanastra";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
