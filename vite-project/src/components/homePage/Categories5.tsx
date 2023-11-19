import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ProductSubset } from '../../typse/typse';
import { Link } from 'react-router-dom';

export default function Categories5() {
    const [allCategories, setAllCategories] = useState<ProductSubset[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/categories');
                const data = await response.json();
                setAllCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <Box>
            <Typography variant="h5" style={{ textAlign: 'center', margin:"20px"}}>
                Top 5 categories
            </Typography>
            <Stack direction="row" spacing={2}>
                {allCategories.slice(0, 5).map((category, index) => (
                    <Link
                        key={index}
                        style={{
                            width: '250px',
                            height: '120px',
                            color: 'white',
                            background: '#4CAF50',
                            textDecoration: 'none',
                            padding: '20px',
                            border: '2px solid black',
                            borderRadius: '20px',
                            margin: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}
                        to={`/categories/${category.name}`}
                    >
                        {category.name}
                    </Link>
                ))}
            </Stack>
        </Box>
    );
}
