import { Product } from "../typse/typse";

interface Props {
    products: Product[];
    filter: string;
    filterType: "brand" | "price" | "rating" | "discountPercentage";
}

export default function ProductsCategory({
    products,
    filter,
    filterType,
}: Props) {
    console.log("productsCategoy working", products);
    
    if (filterType === "brand") {
        return (
            <div>
                {products.map((product) => {
                    if (product.brand === filter || filter === "") {
                        return (
                            <div key={product.id}>
                                <h1>{product.title}</h1>
                                <h2>{product.description}</h2>
                                <h3>{product.price}</h3>
                                <img src={product.thumbnail} id="imgCard" />
                                <h5>{product.discountPercentage}</h5>
                                <h5>{product.rating}</h5>
                            </div>
                        );
                    }
                    return null; // Added to satisfy the return requirement for the map function
                })}
            </div>
        );
    } else {
        const filterSplitNumber = parseInt(filter.split("-")[1]);
        const filterSplitNumber2 = parseInt(filter.split("-")[0]);
        console.log(filterSplitNumber);

        return (
            <div>
                {products.map((product) => {
                    console.log(Math.floor(product[filterType]));

                    if (
                        Math.floor(product[filterType]) < filterSplitNumber &&
                        Math.floor(product[filterType]) >= filterSplitNumber2
                    ) {
                        return (
                            <div key={product.id}>
                                <h1>{product.title}</h1>
                                <h2>{product.description}</h2>
                                <h3>{product.price}</h3>
                                <img src={product.thumbnail} id="imgCard" />
                                <h5>{product.discountPercentage}</h5>
                                <h5>{product.rating}</h5>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        );
    }
}
