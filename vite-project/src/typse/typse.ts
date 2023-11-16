export type Product = {
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
    images: string[];
    coordinates?: {
        latitude: number;
        longitude: number;
    };
};


export type ProductSubset = {
    name: string;
    timeChosen: number;
    __v: number;
    _id: string;
};

