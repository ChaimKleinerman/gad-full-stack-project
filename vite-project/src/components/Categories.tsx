import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useParams } from "react-router-dom";
import CustomizedTables from "./mui/tableCategories";
import ProductsCategory from "./ProductsCategory";

export default function Categories() {
    const { category } = useParams();
    console.log(category);
const [filter, setFilter] = useState<string>('')
const [filterType, setFilterType] = useState<"brand" | "price" | "rating" | "discountPercentage">('brand')
const [products, setProducts] = useState([]);
    useEffect(() => {
       
        const url = "http://localhost:3000/api//products/category";
       
        const data = {
            category: category,
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
            if (response.ok) {
                return response.json();
                
            }
            throw new Error("Request failed!");
        })
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }, [])
    
    

   

    return (
        <>
        <CustomizedTables products = {products} setFilter = {setFilter} setFilterType = {setFilterType}/>
        <ProductsCategory products = {products} filter = {filter} filterType= {filterType}/>
        </>
    )
}
