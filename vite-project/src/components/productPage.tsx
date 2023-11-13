import { useEffect, useState } from 'react';
import { BrowserRouter as Route, Link, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CompareProducts } from './ComparePage';
import { useAppDispatch } from '../redux/hooks';
import { saveProduct1 } from '../redux/projectsSlice';

export interface Product {
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
    cart?: boolean
}

export default function ProductPage() {
    const dispatch = useAppDispatch();
    
    const { id } = useParams();
    const [product, setProduct] = useState<Product>({
        id: 1,
        title: 'The Amazing SanDisk',
        description: 'The amazing sandisk is really amazing. Buy it now so I will get all your money oops I said it loud',
        price: 1000,
        discountPercentage: 1,
        rating: 1,
        stock: 1,
        brand: 'string',
        category: 'string',
        thumbnail: 'string',
        images: ['https://m.media-amazon.com/images/I/61H7b1hylLL._AC_UF1000,1000_QL80_.jpg'],
        times_chosen: 1,
        cart: false
    });
    useEffect(() => {
        const fetchOneProduct = () => {
            fetch(`http://localhost:3000/api/products/${id}`)
                .then(data => data.json())
                .then(myProduct => setProduct(myProduct))
        }
        fetchOneProduct()
    }, [])

    const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images, times_chosen, cart } = product;

    let productInfo =
        <div>
            <h1>{title}</h1>
            <div>{description}</div>
            <div>price: {price}</div>
            <div>{discountPercentage}</div>
            <div>{rating}</div>
            <div>{stock}</div>
            <div>{brand}</div>
            <div>{category}</div>
            <div>{thumbnail}</div>
            <div>{times_chosen}</div>
            <div>{cart}</div>
            <br></br>
        </div>

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '80px' }}> {productInfo} </div>
                <img src={images![0]} width="150" height="150"></img>
            </div>
            <Link to="/cart">
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Link>
            <Link to="/galery"> <Button variant="outlined" onClick={() => {dispatch(saveProduct1(product))}}>compare to other product</Button></Link>
        </>

    )
}


