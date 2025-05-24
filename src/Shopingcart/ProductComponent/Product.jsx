import React, { useEffect, useState } from 'react'
import './Product.css'

const Product = ({product,cart,setCart}) => {

    const [isProductAvailableInCart,setIsProductAvailableInCart] = useState(false)

    const addToCart = () => {

        console.log("Adding item to cart")

        setCart(prevCart => {
          const existingProduct = prevCart.find(p => p.id === product.id);
          if (existingProduct) {
        
            return prevCart.map(p =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      };
      

    const removeCart = () => {

        console.log("Removing item from cart")
        setCart(prevCart => {
            const productExit = prevCart.find(p => p.id === product.id)
        
            console.log("productExit - {} ",productExit)
            if(productExit && productExit.quantity > 1) {
                return prevCart.map(p => 
                    p.id === product.id ? {...p,quantity: p.quantity-1} : p
                )
            }else{
                setIsProductAvailableInCart(false)
                return prevCart.filter(p => 
                    p.id !== product.id 
                )

            }
        })

    }

    useEffect(() => {
         const availale = cart.find(p => p.id === product.id)     

         if(availale) setIsProductAvailableInCart(true)
    },[cart])

    
  return (
    <div className="product-container">
        <div className='prod-img'>
            <img src={product.images[0]} alt="" />
        </div>

        <div className="prod-details">
            <div className="prod-basic-details">
            <h3 className='prod-name' title={product.title}>
                {product.title.length > 20 ? product.title.slice(0, 20).concat('....') : product.title}
            </h3>
                <p className='prod-price'>Price Rs: {product.price}</p>
            </div>
            <div className="buttons">
                <button className='add-cart' onClick={addToCart}>Add to cart</button>
                {isProductAvailableInCart && <button className='remove-cart' onClick={removeCart}>Remove Cart</button>}
            </div>
           
        </div>
        
    </div>
  )
}

export default Product