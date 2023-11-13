import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Categories() {
    const { category } = useParams();
    console.log(category);

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
            console.log("PUT request succeeded with data:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }, [])
    
    

   

    return <div>Categories</div>;
}