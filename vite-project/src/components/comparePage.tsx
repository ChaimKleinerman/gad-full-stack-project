import { useAppSelector } from "../redux/hooks"

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

    return (
        <>
        <h1>compare page</h1>
        {/* <div>{product1.title}</div>
        <div>{product1.description}</div>
        <div>2{product2.title}</div>
        <div>2{product2.description}</div> */}

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
                        <img src={product1.thumbnail} alt='product image' style={{width: '150px', height: '150px'}}/>
                    </TableCell>
                    <TableCell align='left'>
                        <img src={product2.thumbnail} alt='product image' style={{width: '150px', height: '150px'}}/>
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
                    <TableCell align='left'>discountPercentage</TableCell>
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
                </TableBody>
            </Table>
        </TableContainer>
        <br></br>
        </>
    )
}