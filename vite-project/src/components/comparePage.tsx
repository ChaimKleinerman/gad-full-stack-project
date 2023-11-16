import { useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ComparePage() {
    const product1 = useAppSelector((state) => state.products.product1);
    const product2 = useAppSelector((state) => state.products.product2);
    let ID1 = product1.id.toString();
    let ID2 = product2.id.toString();

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

    return (
        <>
            <h1>compare page</h1>
            <Link to={`/categories/${product1.category}`}>
                <Button variant="outlined">{`back to ${product1.category}`}</Button>
            </Link>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">{product1.title}</TableCell>
                            <TableCell align="left">{product2.title}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='left'></TableCell>
                            <TableCell align='left'>
                                <Paper elevation={3} sx={{ width: '200px', height: '150px' }}>
                                    <img src={product1.thumbnail} alt='product image' style={{ width: '200px', height: '150px' }} />
                                </Paper>
                            </TableCell>
                            <TableCell align='left'>
                            <Paper elevation={4} sx={{ width: '200px', height: '150px' }}>
                                <img src={product2.thumbnail} alt='product image' style={{ width: '200px', height: '150px' }} />
                            </Paper>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='left'>category</TableCell>
                            <TableCell align='left'>{product1.category}</TableCell>
                            <TableCell align='left'>{product2.category}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='left'>description</TableCell>
                            <TableCell align='left'>{product1.description}</TableCell>
                            <TableCell align='left'>{product2.description}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='left'>price</TableCell>
                            <TableCell align='left'>{product1.price}</TableCell>
                            <TableCell align='left'>{product2.price}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='left'>discount percentage</TableCell>
                            <TableCell align='left'>{product1.discountPercentage}</TableCell>
                            <TableCell align='left'>{product2.discountPercentage}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='left'>rating</TableCell>
                            <TableCell align='left'>{product1.rating}</TableCell>
                            <TableCell align='left'>{product2.rating}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='left'>stock</TableCell>
                            <TableCell align='left'>{product1.stock}</TableCell>
                            <TableCell align='left'>{product2.stock}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='left'>brand</TableCell>
                            <TableCell align='left'>{product1.brand}</TableCell>
                            <TableCell align='left'>{product2.brand}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='left'></TableCell>
                            <TableCell align='left'>
                                {<IconButton
                                    onClick={() => addToCart(ID1)}
                                    color="primary"
                                    aria-label="add to shopping cart"
                                >
                                    <AddShoppingCartIcon />
                                </IconButton>}
                            </TableCell>
                            <TableCell align='left'>
                                {<IconButton
                                    onClick={() => addToCart(ID2)}
                                    color="primary"
                                    aria-label="add to shopping cart"
                                >
                                    <AddShoppingCartIcon />
                                </IconButton>}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}