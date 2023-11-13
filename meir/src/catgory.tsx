import React, { useState, useEffect } from "react";
import { Header, List, Card } from "mui";

interface Category {
  id: number;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://localhost:3000/api/products')
    .then((date) => {
        date.json()
    })
    .then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <List>
        {categories.map((category) => (
          <Card key={category.id}>
            <h2>{category.name}</h2>
          </Card>
        ))}
      </List>
    </div>
  );
};

export default Categories;
