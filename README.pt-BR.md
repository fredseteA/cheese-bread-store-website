# 🧀 Pão de Queijo Mineiro — Loja de Pão de Queijo Artesanal

> Landing page de e-commerce para uma marca de pão de queijo caseiro mineiro, desenvolvida com React + Vite + TypeScript.

![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss)

---

## ✨ Sobre o Projeto

**Pão de Queijo Mineiro** é uma marca artesanal nascida em Iguatama, Minas Gerais. Este site funciona como vitrine digital e apresentação da marca, unindo uma identidade visual acolhedora com funcionalidades de e-commerce.

O site conta a história por trás da marca — uma receita de família transmitida de geração em geração — e permite que os clientes naveguem pelos produtos, gerenciem um carrinho e façam pedidos diretamente pelo WhatsApp.

Acesse: **[paodequeijomineiro.vercel.app](https://paodequeijomineiro.vercel.app)**

---

## 🗂️ Estrutura do Projeto

```
cheese-bread-store-website/
├── public/
└── src/
    ├── app/
    │   └── App.tsx                  # Componente raiz e rotas
    ├── assets/                      # Imagens (hero, fotos de produtos, fotos do queijo)
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   └── Footer.tsx
    │   └── ui/                      # Componentes de UI reutilizáveis (shadcn/ui)
    ├── features/
    │   ├── carts/
    │   │   └── context/
    │   │       └── CartContext.tsx   # Estado global do carrinho + modo admin
    │   ├── products/
    │   │   └── components/
    │   │       └── ProductCard.tsx   # Card de produto com gestão de estoque
    │   └── whatsapp/                 # Integração com pedidos via WhatsApp
    ├── layouts/
    │   ├── App.css
    │   └── index.css                 # Estilos globais + diretivas do Tailwind
    ├── pages/
    │   ├── About/
    │   │   ├── components/           # Seções da página Sobre
    │   │   └── index.tsx
    │   ├── Contact/
    │   │   ├── components/
    │   │   │   └── HeroSection.tsx
    │   │   └── index.tsx
    │   ├── Home/
    │   │   ├── components/
    │   │   │   ├── CheeseSection.tsx # Destaque do Queijo Canastra
    │   │   │   └── ProductList.tsx   # Grid de produtos + banner
    │   │   └── index.tsx
    │   └── NotFound/
    ├── shared/
    │   ├── hooks/                    # Custom hooks React
    │   └── utils/                    # Funções utilitárias
    └── main.tsx
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| **React 18** | Interface baseada em componentes |
| **TypeScript** | Tipagem estática em todo o projeto |
| **Vite** | Servidor de desenvolvimento e build rápidos |
| **Tailwind CSS** | Estilização com classes utilitárias |
| **shadcn/ui** | Primitivos de UI acessíveis |
| **Lucide React** | Biblioteca de ícones |
| **React Router** | Roteamento no lado do cliente |

---

## 📄 Páginas

### 🏠 Home (`/`)
Página principal. Contém:
- **Seção Hero** — imagem em tela cheia com headline da marca
- **CheeseSection** — destaque do Queijo Canastra DOP com galeria de fotos e estatísticas (400+ anos de tradição, certificação DOP, 100% leite cru)
- **ProductList** — grid de produtos 2 colunas (mobile) / 3 colunas (desktop)
- **Banner** — chamada para ação "Manhãs mais felizes"

### 📖 Sobre (`/sobre`)
Página com a história e herança da marca. Contém:
- **Hero** — paisagem da Serra da Canastra com tagline de origem
- **História da fundadora** — narrativa pessoal sobre crescer em Iguatama, MG
- **Tributo à Vó Geni** — seção emocional que homenageia a avó cuja receita inspirou a marca
- **Diferenciais** — grid de 6 cards destacando o que torna o produto único (Canastra DOP, receita artesanal, tradição familiar, etc.)
- **CTA final** — link para os produtos

### 📞 Contato (`/contato`)
- **Hero** — cabeçalho da página de contato
- Abordagem de contato prioritária via WhatsApp

---

## 🛒 Funcionalidades

### Catálogo de Produtos
- Grid dinâmico de produtos carregado via Context
- Cada card exibe: nome, descrição, preço, disponibilidade em estoque
- Badge "Recheado" para variantes especiais
- Estado esgotado com tratamento em escala de cinza e botão desabilitado

### Carrinho de Compras
- Estado global do carrinho gerenciado via React Context (`CartContext`)
- Adicionar/remover itens
- Pedido enviado diretamente pelo WhatsApp com resumo completo dos produtos

### Modo Administrador
- Modo admin oculto ativado por uma interação secreta
- Permite editar o estoque diretamente em cada card de produto (incrementar/decrementar/input manual)
- Badge indicador visual quando o modo admin está ativo

---

## 🎨 Sistema de Design

A identidade visual é construída em torno de uma estética artesanal e aconchegante, inspirada na região de Minas Gerais.

**Paleta de Cores:**

| Token | Hex | Uso |
|---|---|---|
| Marrom escuro (bg principal) | `#2a1200` | Fundos de seção, fundos de cards |
| Background profundo | `#1a0f05` | Background base da página |
| Âmbar (destaque) | `#c47820` | Labels, badges, destaques, CTAs |
| Creme (texto) | `#f5e8d0` | Títulos em fundos escuros |
| Creme suave | `rgba(245,232,208,0.65)` | Corpo de texto em fundos escuros |
| Bege quente | `#a37c53` | Fundos de seções secundárias |

**Tipografia:**
- **Playfair Display** — títulos, preços, textos de exibição (editorial, serifado)
- **Inter** — corpo de texto, labels, elementos de UI (limpo, sem serifa)

**Princípios de Design:**
- Mobile-first, totalmente responsivo com dimensionamento fluido via `clamp()`
- Labels maiúsculas com `letterSpacing: "0.22em"` consistentes entre seções
- Overlays de imagem com gradientes direcionais para legibilidade do texto
- Estados hover: elevação do card (`hover:-translate-y-1`), zoom da imagem (`group-hover:scale-105`)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/cheese-bread-store-website.git
cd cheese-bread-store-website

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O app estará disponível em `http://localhost:5173`.

### Build para Produção

```bash
npm run build
```

### Visualizar Build de Produção

```bash
npm run preview
```

---

## 🌐 Deploy

O projeto está publicado na **Vercel** sem necessidade de configuração. Qualquer push para a branch `main` dispara um deploy automático.

Para publicar sua própria instância:

1. Faça um fork do repositório
2. Importe-o em [vercel.com](https://vercel.com)
3. Publique — a Vercel detecta o Vite automaticamente

---

## 📦 Variáveis de Ambiente

Crie um arquivo `.env` na raiz se necessário:

```env
# Atualmente não há variáveis de ambiente obrigatórias
# O número do WhatsApp é configurado diretamente na feature whatsapp
```

---

## 🙏 Agradecimentos

Este projeto foi feito com carinho para honrar uma tradição familiar. Agradecimento especial à **vó Geni** e à **Marília**, cujas receitas artesanais são a alma de cada fornada.

> *"Ao escaldar o polvilho, uma oração é sempre feita pela alma da vó Geni."*

---

## 📝 Licença

Este projeto é privado e proprietário. Todos os direitos reservados.
