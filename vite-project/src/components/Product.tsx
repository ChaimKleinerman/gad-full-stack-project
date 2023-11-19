import { useEffect, useState } from 'react';
import { BrowserRouter as Route, Link, useParams } from 'react-router-dom';
// import { Button } from '@mui/base';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Product } from '../typse/typse';
import { useAppDispatch } from '../redux/hooks';
import { useAppSelector } from '../redux/hooks';
import MapComponent from './maps/MapLyer';
import { saveProduct1, addCount, reduceCount } from '../redux/projectsSlice';
import { Storage } from "../storage";
// import { useAppDispatch } from '../redux/hooks';


export default function ProductPage() {
    const dispatch = useAppDispatch()
    const product1 = useAppSelector((state) => state.products.product1);
    const [coordinate1, setCoordinateSet] = useState(1)
    const [coordinate2, setCoordinateSet2] = useState(1)
    const [coordinate3, setCoordinateSet3] = useState(1)
    const [coordinate4, setCoordinateSet4] = useState(1)

    const { id } = useParams();
    const [product, setProduct] = useState<Product>({
        id: 1,
        title: 'The Amazing SanDisk',
        description: 'The amazing sandisk is really amazing.',
        price: 1000,
        discountPercentage: 1,
        rating: 1,
        stock: 1,
        brand: 'string',
        category: 'string',
        thumbnail: 'string',
        images: [''],
        coordinates:{
            latitude: 1,
            longitude: 1,
          }
    });
    useEffect(() => {
        const fetchOneProduct = () => {
            fetch(`http://localhost:3000/api/products/${id}`)
                .then(data => data.json())
                .then((myProduct) => {
                    setProduct(myProduct);
                    const foo = myProduct.coordinates.latitude;
                    setCoordinateSet(myProduct.coordinates.latitude)
                    setCoordinateSet2(myProduct.coordinates.longitude)
                    setCoordinateSet3(myProduct.coordinates.latitude2)
                    setCoordinateSet4(myProduct.coordinates.longitude2)
                    console.log('this state',coordinate1);  
                })
        }
        fetchOneProduct()
    }, [coordinate1, coordinate2]);

    const addToCart = async (id: string | undefined) => {
        if (Storage()) {
            // Local storage is available
            const cartString = localStorage.getItem('cart');
            console.log('cartString', cartString);

            const cart = cartString ? JSON.parse(cartString) : [];
            console.log('cccccccccccc', cart);

            // Check if the product is already in the cart
            const existingProductIndex = cart.findIndex((item: Product) => item.id === product.id);

            if (existingProductIndex !== -1) {
                // Product is already in the cart, update quantity
                const updatedCart = [...cart];
                updatedCart[existingProductIndex].quantity += 1;

                localStorage.setItem('cart', JSON.stringify(updatedCart));
                console.log(updatedCart, 'qwertyuiop');
            } else {
                // Product is not in the cart, add it with quantity 1
                const updatedCart = [...cart, { ...product, quantity: 1 }];
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                console.log(updatedCart, 'qwertyuiop');
            }
        }
        else {
            const email = localStorage.getItem("email");

            const url = "http://localhost:3000/api/cart";
            const data = {
                email: email,
                productId: id,
            };
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(url, requestOptions)
                .then((response) => {
                    console.log(response);

                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };
    };

    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        coordinates,
    } = product;
    let productInfo = (
        <div style={{fontFamily: 'sans-serif'}}>
            <h1>{title}</h1>
            <div>category: {category}</div>
            <div>{description}</div>
            <div>price: {price}</div>
            <div>Discount Percentage: {discountPercentage}</div>
            <div>rating: {rating}</div>
            <div>products in stock: {stock}</div>
            <div>brand: {brand}</div>
            <br></br>
        </div>
    );

    const saveProductToRedux = () => {
        dispatch(saveProduct1(product));
        console.log('redux product1:', product1);
    }

    return (
        <>
            <Link to={`/categories/${category}`} >
                <Button variant="outlined">{`back to ${category}`}</Button>
            </Link>

            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '80px' }}> {productInfo} </div>
                <img src={thumbnail}></img>
            </div>
            <IconButton
                onClick={() => { addToCart(id); dispatch(addCount()) }}
                color="primary"
                aria-label="add to shopping cart"
            >
                <AddShoppingCartIcon />
            </IconButton>
            {/* <Link to={`/categories/${category}`} ><button onClick={() => saveProductToRedux()}>compare to other product</button></Link> */}
            <Link to={`/categories/${category}`} >
                <Button variant="outlined" onClick={() => saveProductToRedux()}>compare to other product</Button>
            </Link>
            <div><MapComponent coordinate1={coordinate1} coordinate2={coordinate2} coordinate3={coordinate3} coordinate4={coordinate4}/></div>

        </>
    )
}
