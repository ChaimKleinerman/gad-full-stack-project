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
        <Box>
            <Stack direction="row" >
                {
                    allCategories.map((categori, index) => {

                        return index < 5 ?
                            <Link
                                key={index}
                                style={{
                                    width: '400px', // Adjust the width as needed
                                    height: '200px',
                                    color: 'white',
                                    background: '#09056a',
                                    textDecoration: 'none',
                                    padding: '10px', // Keep only one padding property
                                    border: '1px solid black',
                                    borderRadius: '70px',
                                    margin: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly'
                                }}
                                to={`/product/${categori.id}`}>
                                {categori.title}
                            </Link> : null
                    })
                }
            </Stack>
        </Box >
    )
}

