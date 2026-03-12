import { useState } from "react";
import { StoreProvider } from "@/contexts/StoreContext";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductList } from "@/components/ProductList";
import { AboutSection } from "@/components/AboutSection";
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
          <AboutSection />
        </main>
        
        <Footer />
        
        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <WhatsAppButton />
      </div>
    </StoreProvider>
  );
};

export default Index;
