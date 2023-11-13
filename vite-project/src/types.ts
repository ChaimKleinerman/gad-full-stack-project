interface Category {
timeChosen: number;
    name: string;
    _id: string;
}

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
    times_chosen: number,
}
export type { Category, Product };