import { useEffect, useState } from 'react';
import { BrowserRouter as Route, Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function CompareProducts() {
    const product1 = useAppSelector((state) => state.products.product1)
    const product2 = useAppSelector((state) => state.products.product2)
    // לחלץ את השדות ממוצר1  ומוצר2
    const productsArr = [product1, product2]
    // const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images, times_chosen, cart } = product;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Product</TableCell>
                        <TableCell align="left">title1{product1.title}</TableCell>
                        <TableCell align="left">title2{product2.title}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left'></TableCell>
                    <TableCell align='left'>image1{product1.images![0]}</TableCell>
                    <TableCell align='left'>image2{product2.images![0]}</TableCell>
                    </TableRow>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left'>category</TableCell>
                    <TableCell align='left'>cat1{product1.category}</TableCell>
                    <TableCell align='left'>cat2{product2.category}</TableCell>
                    </TableRow>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left'>description</TableCell>
                    <TableCell align='left'>desc1{product1.description}</TableCell>
                    <TableCell align='left'>desc2{product2.description}</TableCell>
                    </TableRow>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left'>price</TableCell>
                    <TableCell align='left'>price1{product1.price}</TableCell>
                    <TableCell align='left'>price2{product2.price}</TableCell>
                    </TableRow>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left'>discountPercentage</TableCell>
                    <TableCell align='left'>1{product1.discountPercentage}</TableCell>
                    <TableCell align='left'>2{product2.discountPercentage}</TableCell>
                    </TableRow>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left'>rating</TableCell>
                    <TableCell align='left'>1{product1.rating}</TableCell>
                    <TableCell align='left'>2{product2.rating}</TableCell>
                    </TableRow>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left'>stock</TableCell>
                    <TableCell align='left'>1{product1.stock}</TableCell>
                    <TableCell align='left'>2{product2.stock}</TableCell>
                    </TableRow>
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left'>brand</TableCell>
                    <TableCell align='left'>1{product1.brand}</TableCell>
                    <TableCell align='left'>2{product2.brand}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

}








