import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleClick = () => {
    const phoneNumber = "5522981382606";
    const message = "Olá! Gostaria de saber mais sobre os pães de queijo.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-minas-green text-accent-foreground shadow-elevated hover:bg-minas-light hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse-soft"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
}
