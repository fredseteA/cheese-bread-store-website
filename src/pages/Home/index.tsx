import { useState } from "react";
import { StoreProvider } from "@/features/carts/context/CartContext";
import { Header, Footer } from "@/components/layout";
import { HeroSection, CheeseSection, ProductList } from "@/pages/Home/components";
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
          <CheeseSection />
        </main>
        
        <Footer />
        
        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <WhatsAppButton />
      </div>
    </StoreProvider>
  );
};

export default Index;
