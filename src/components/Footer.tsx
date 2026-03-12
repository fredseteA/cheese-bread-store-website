import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brown-dark text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Pão de Queijo Mineiro</h3>
              </div>
            </div>
            <p className="text-cream/70 font-body text-sm leading-relaxed">
              O autêntico sabor de Minas Gerais em cada mordida. 
              Produção artesanal com Queijo Canastra legítimo.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center gap-2 text-cream/70">
                <Phone className="h-4 w-4 text-primary" />
                (22) 98138-2606
              </li>
              {/*<li className="flex items-center gap-2 text-cream/70">
                <Mail className="h-4 w-4 text-primary" />
                contato@paodequeijomineiro.com.br
              </li>*/}
              <li className="flex items-center gap-2 text-cream/70">
                <MapPin className="h-4 w-4 text-primary" />
                Campos dos Goytacazes - RJ
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Informações</h4>
            <ul className="space-y-2 font-body text-sm text-cream/70">
              <li>Pacotes congelados com 30 unidades</li>
              <li>Pagamento via PIX</li>
              <li>Pedidos pelo WhatsApp</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream/10 mt-8 pt-8 text-center">
          <p className="text-cream/50 text-sm font-body">
            © {new Date().getFullYear()} Pão de Queijo Mineiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
