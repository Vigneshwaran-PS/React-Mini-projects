import { useEffect, useState } from "react";
import axios from 'axios'
import Product from "../ProductComponent/Product";
import './Home.css'


const Home = ({cart,setCart}) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = 'https://dummyjson.com/products';
        const response = await axios.get(url);

        const responseData = response.data;
        console.log("Response Data:", responseData);

        const responseProduct = responseData.products;
        setProducts(responseProduct);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='products-container'>
        {
            products && (
                products.map((product) => (
                    <Product 
                        key = {product.id} 
                        product = {product}
                        cart = {cart}
                        setCart = {setCart}
                    />
                ))
            )
        }
    </div>
  );
};

export default Home;
