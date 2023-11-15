import { useEffect, useState } from 'react';
import { BrowserRouter as Route, Link, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Product } from '../typse/typse';

export default function ProductPage() {
  const { id } = useParams();
  console.log(id);
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
  });
  useEffect(() => {
    const fetchOneProduct = () => {
      fetch(`http://localhost:3000/api/products/${id}`)
        .then(data => data.json())
        .then((myProduct) => {
          setProduct(myProduct[0]);
        })
    }
    fetchOneProduct()
  }, [])
  const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = product;
  let productInfo =
    <div>
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
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '80px' }}> {productInfo} </div>
        <button><img src={thumbnail}></img></button>
      </div>
      <Link to="/cart">
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Link>
    </>
  )
}