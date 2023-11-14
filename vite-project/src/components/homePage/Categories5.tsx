import React, { useEffect, useState } from 'react'
import { Avatar, Box, Stack } from '@mui/material'
import { ProductSubset } from '../../typse/typse'
import { Link } from 'react-router-dom'

export default function Categories5() {

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
                                to={`/categories/${categori.name}`}>
                                {categori.name}
                                {/* <Avatar
                                    sx={{
                                        bgcolor: deepPurple[500],
                                        width: '400', // Adjust the width as needed
                                        height: '400',
                                        padding:'10px',
                                        border:'1px solid black',
                                        borderRadius:'10px'// Adjust the height as needed
                                    }}>
                                </Avatar> */}

                            </Link> : null
                    })
                }
            </Stack>
        </Box >
    )
}
