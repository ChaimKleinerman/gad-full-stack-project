export interface Product {
    _id: string;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    times_chosen: string;
    title: string;
    __v: number;
}

export type ProductSubset = {
    name: string;
    timeChosen: number;
    __v: number;
    _id: string;
};

