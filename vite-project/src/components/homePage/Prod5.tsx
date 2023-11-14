import { Avatar, Box, Stack } from '@mui/material'
import { Product } from '../../typse/typse'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export default function Prod5() {



    const [allCategories, setallCategories] = useState<Product[]>([])

    useEffect(() => {
        const categories = async () => {
            // fetch all categories
            return await fetch('http://localhost:3000/api/products')
        }
        categories().then(data => data.json())
            .then((data) => setallCategories(data))
    }, [])
    console.log(allCategories);
    return (
        <>
        </>
    )
}

