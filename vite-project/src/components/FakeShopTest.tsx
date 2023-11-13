// import { BrowserRouter as Route, Link } from 'react-router-dom';
// import { useAppDispatch } from '../redux/hooks';
// import { saveProduct2 } from '../redux/projectsSlice';

// interface Product {
//     name: string;
//     destination: string;
//     startDate: string;
//     endDate: string;
//     description: string;
//     price: number;
//     image: string;
// }

// const myProducts: Product[] = [
//     {
//         name: "iphone",
//         destination: "shmulyyyy",
//         startDate: "hhahaaaaaa",
//         endDate: "lmsacnfjdnlk bkfd",
//         description: "iphone is the best nuy it now!!!!!",
//         price: 15000,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NBgk3aIeg4MyMT59g7hAUfm8lHjyt5T64A&usqp=CAU"
//     },
//     {
//         name: "disk on key",
//         destination: "shmulyyyy ghbfn jhbkn",
//         startDate: "yyeesssss",
//         endDate: "lululululululu",
//         description: "disk on key yyyeeeesssss!!!!!",
//         price: 50,
//         image: 'https://m.media-amazon.com/images/I/61ERDR3tATL.jpg ' 
//     },
//     {
//         name: "Drone",
//         destination: "shmulyyyy ghbfn jhbkn",
//         startDate: "bkjgbkfkjfnd kjfdf",
//         endDate: "lillilililili",
//         description: "drone is amazing wwwwwhhhhhhuuuuuuu!!!!!",
//         price: 50000000000,
//         image: 'https://dji-official-fe.djicdn.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c.png' 
//     }
// ]


// export default function OtherProducts() {
//     const dispatch = useAppDispatch();

//     let prodImgArr = [];
//     let titleArr: string[] = [];
//     for (let product of myProducts) {
//         const {name, destination, startDate, endDate, description, price, image} = product;
//         prodImgArr.push(image);
//         titleArr.push(name)
//     }

//     return (
//         <>
//         <h1>WELCOME TO OTHER PRODUCTS!</h1>
//         <Link to="/compare"><button onClick={() => {dispatch(saveProduct2(titleArr[0]))}}>{<img src={prodImgArr[0]} style={{width: '300px', height: '300px'}}/>}</button></Link>
//         <Link to="/compare"><button onClick={() => {dispatch(saveProduct2(titleArr[1]))}}>{<img src={prodImgArr[1]} style={{width: '300px', height: '300px'}}/>}</button></Link>
//         <Link to="/compare"><button onClick={() => {dispatch(saveProduct2(titleArr[2]))}}>{<img src={prodImgArr[2]} style={{width: '300px', height: '300px'}}/>}</button></Link>       
//         {/* <button>{<img src={prodImgArr[0]} style={{width: '300px', height: '300px'}}/>}</button>
//         <button>{<img src={prodImgArr[1]} style={{width: '300px', height: '300px'}}/>}</button>
//         <button>{<img src={prodImgArr[2]} style={{width: '300px', height: '300px'}}/>}</button> */}
//         <Link to="/"><button>back to product page</button></Link>
//         </>
//     )
// }