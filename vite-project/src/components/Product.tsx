import { useEffect, useState } from 'react';
import { BrowserRouter as Route, Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Product } from '../typse/typse';
import { useAppDispatch } from '../redux/hooks';
import { useAppSelector } from '../redux/hooks';
import { saveProduct1 } from '../redux/projectsSlice';

export default function ProductPage() {
    const dispatch = useAppDispatch()
    const product1 = useAppSelector((state) => state.products.product1);

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
    });
    useEffect(() => {
        const fetchOneProduct = () => {
            fetch(`http://localhost:3000/api/products/${id}`)
                .then(data => data.json())
                .then((myProduct) => {
                    setProduct(myProduct);
                })
        }
        fetchOneProduct()
    }, [])

    const addToCart = async (id: string | undefined) => {
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
        images,
    } = product;

    let productInfo = (
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <ul>
                <li>category: {category}</li>
                <li>price: {price}$</li>
                <li>Discount Percentage: {discountPercentage}%</li>
                <li>rating: {rating}</li>
                <li>products in stock: {stock}</li>
                <li>brand: {brand}</li>
            </ul>
            <h2>price: {price}$</h2>
        </div>
    );
    // let productInfo = (
    //     <div>
    //         <h1>{title}</h1>
    //         <h3>{description}</h3>
    //         <div>category: {category}</div>
    //         <div>price: {price}</div>
    //         <div>Discount Percentage: {discountPercentage}%</div>
    //         <div>rating: {rating}</div>
    //         <div>products in stock: {stock}</div>
    //         <div>brand: {brand}</div>
    //         <br></br>
    //     </div>
    // );


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
                <div style={{ marginRight: '90px' }}> {productInfo} </div>
                <img src={thumbnail}></img>
            </div>

            
            <IconButton
                onClick={() => addToCart(id)}
                color="primary"
                aria-label="add to shopping cart"
            >
                <AddShoppingCartIcon />
            </IconButton>
            {/* <Link to={`/categories/${category}`} ><button onClick={() => saveProductToRedux()}>compare to other product</button></Link> */}
            <Link to={`/categories/${category}`} >
                <Button variant="outlined" onClick={() => saveProductToRedux()}>compare to other product</Button>    
            </Link>
            
        </>
            )
        }
