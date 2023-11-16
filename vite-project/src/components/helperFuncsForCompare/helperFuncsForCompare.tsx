import { useAppSelector } from "../../redux/hooks";
import { Product } from "../../typse/typse";

export const emptyProduct: Product = {
    id: 0,
    title: 'empty',
    description: 'empty',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: 'empty',
    category: 'empty',
    thumbnail: 'empty',
    images: [],
}

export function checkProductId() {
    const product1 = useAppSelector((state) => state.products.product1);
    const product2 = useAppSelector((state) => state.products.product2);
    if (product1.id !== 0) {
        if (product2.id === 0) {
            return true
        }
    }
    return false
}





