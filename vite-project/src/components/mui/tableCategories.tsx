import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Product } from "../../types";

interface Props {
    products: Product[];
}

export default function CustomizedTables({ products }: Props) {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    function createData(
        brand: string,
        price: string,
        rating: string,
        discountPercentage: string
    ) {
        return { brand, price, rating, discountPercentage };
    }
    function createRows(products: Product[]) {
        const price = ["until 100","100-500","500-1000","1000-5000",'','','','','','','','']
        const rating = ["1-2","2-3","3-4","4-5",'','','','','','','','']
        const discountPercentage = ["0-10","10-20","20-30","30-40","40-50","50-60","60-70","70-80","80-90","90-100"]
        const check:string[] = []
        const rows = products.map((product,index) => {
            check.push(product.brand)
            if (!(check.includes(product.brand))) {
              return  createData(product.brand,price[index],rating[index],discountPercentage[index])
            }
            
        });
        return rows;
    }
 
    const rows = createRows(products);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                           Brand
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            Price
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            Rating
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            Discount Percentage
                        </StyledTableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row?.brand}>
                            <StyledTableCell component="th" scope="row">
                                {row?.price}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row?.discountPercentage}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row?.rating}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
