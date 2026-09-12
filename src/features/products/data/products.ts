import { Product } from "@/features/products/types";
import paoTradicional from "@/assets/pao-tradicional-quadrado.jpeg";
import paoLinguica from "@/assets/pao-linguica-quadrado.jpeg";
import paoGoiabada from "@/assets/pao-goiabada-quadrado.jpeg";

// Dados dos produtos 
export const initialProducts: Product[] = [
  {
    id: "tradicional",
    name: "Tradicional",
    description: "O autêntico pão de queijo mineiro, feito com Queijo Canastra legítimo. Crocante por fora, macio e elástico por dentro.",
    price: 30.0,
    stock: 20, 
    image: paoTradicional,
    isStuffed: false,
  },
  {
    id: "linguica",
    name: "Recheado com Linguiça",
    description: "Pão de queijo artesanal com recheio de linguiça defumada de alta qualidade. Perfeito para um lanche especial.",
    price: 35.0,
    stock: 15,
    image: paoLinguica,
    isStuffed: true,
  },
  {
    id: "goiabada",
    name: "Recheado com Goiabada",
    description: "A combinação clássica do queijo com a doçura da goiabada cascão. O famoso Romeu e Julieta mineiro.",
    price: 35.0,
    stock: 10,
    image: paoGoiabada,
    isStuffed: true,
  },
];
