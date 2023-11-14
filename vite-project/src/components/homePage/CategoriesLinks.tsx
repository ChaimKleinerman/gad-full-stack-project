import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Routes, Route, useParams } from 'react-router-dom'
// import Link from '@mui/material/Link';
import { ProductSubset } from '../../typse/typse';


export default function CategoriesLinks() {
    const [allCategories, setallCategories] = useState<ProductSubset[]>([])

    useEffect(() => {
        const categories = async () => {
            // fetch all categories
            return await fetch('http://localhost:3000/api/categories')
        }
        categories().then(data => data.json())
            .then((data) => setallCategories(data))
    }, [])
    console.log(allCategories);

    return (
        <Box>
            <Box
                sx={{
                    background: '#5f6ddc',
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>{
                    allCategories.map((categori, index) => {
                        // Categories.map((categori, index) => {
                        return <Link
                            key={index}
                            // component="button"
                            // underline="none"
                            style={{ color: 'white', padding: '5px', textDecoration: 'none' }}
                            to={`/categories/${categori.name}`}
                        >
                            {categori.name}
                        </Link>
                    })
                }
            </Box>
        </Box>
    )
}