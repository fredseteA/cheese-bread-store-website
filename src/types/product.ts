// Types for Mineiro Cheese Bread products

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  isStuffed: boolean; 
}

export interface CartItem {
  product: Product;
  quantity: number;
}
