export function Storage() {
    return localStorage.getItem('email') === null
}
console.log(localStorage.getItem('email'), '-', Storage());

export const userCount = async () => {
    const url = "http://localhost:3000/api/cart/get";
    const data = {
        email: localStorage.getItem('email'),
    };
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    const result = await fetch(url, requestOptions)
        .then((response) => {
            console.log(response);
            if (response.ok) {
                return response.json();
            }
            throw new Error("Request failed!");
        })
        .then((data) => {
            console.log("PUT request succeeded with data:", data);
            return (data);
        })
        .catch((error) => {
            console.error("Error:", error);
        }
        );
    return result
}
console.log(userCount());
