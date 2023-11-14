import { useAppDispatch } from '../redux/hooks';
import { useAppSelector } from '../redux/hooks';
import { saveProduct1 } from '../redux/projectsSlice';
import { saveProduct2 } from '../redux/projectsSlice';
import { Product } from './types';

export const emptyProduct = {
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
    images: [''],
    times_chosen: 0,
    cart: false
}

const checkProductId = () => {
    const product1 = useAppSelector((state) => state.products.product1);
    const product2 = useAppSelector((state) => state.products.product2);
    if (product1.id !== 0) {
        if (product2.id === 0) {
            return true
        }
    }
    return false
}

export function saveProd2InRedux(chosenProduct: Product) {
    const dispatch = useAppDispatch();
    let flag = checkProductId();
    if (flag === true) {   
        dispatch(saveProduct2(chosenProduct)) 
    }
}

export function LinkChanger() {
    const product1 = useAppSelector((state) => state.products.product1)
    const product2 = useAppSelector((state) => state.products.product2)
    let myString = "/product/:1";
    if (product1.id !== 0) {
        if (product2.id === 0) {
            myString = "/compare"
            return myString
        }
    }
    return myString
}

export const restartProductsValues = () => {
    const dispatch = useAppDispatch();
    
    dispatch(saveProduct1(emptyProduct))
    dispatch(saveProduct2(emptyProduct))
}