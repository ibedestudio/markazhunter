export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  specs: string[];
  description: string;
  status: 'READY' | 'PRE-ORDER' | 'SOLD';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

export interface ContactConfig {
  whatsapp: string;
  location: string;
  email: string;
}