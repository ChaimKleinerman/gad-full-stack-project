interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
  times_chosen?: number,
  coordinates?: {
      latitude: number;
      longitude: number;
      latitude2: number;
      longitude2: number;
  };
}


interface Data {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}


  export class Err extends Error {
    code: number;
    constructor(code: number, message: string) {
        super(message);
        this.code = code;
    }
    
  }
  
export type{Product,Data}