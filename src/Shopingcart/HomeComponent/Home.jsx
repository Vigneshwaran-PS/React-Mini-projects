import Product from "../ProductComponent/Product";
import './Home.css'


const Home = ({products,cart,setCart,search,loading}) => {

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    
      return (
        <div className='products-container'>
          {loading && <p className="loading">Please wait, loading...</p>}
    
          {!loading && filteredProducts.length > 0 &&
            filteredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))
          }
    
          {!loading && filteredProducts.length === 0 && (
            <p className="not-found">No products found</p>
          )}
        </div>
      );
};

export default Home;
