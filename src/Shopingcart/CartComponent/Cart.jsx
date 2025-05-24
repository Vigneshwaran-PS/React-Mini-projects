import React, { useEffect, useReducer, useState } from 'react'
import './Cart.css'


const Cart = ({cart,setCart}) => {

    const [total,setTotal] = useState(0)

    function calculateParticularProductTotal(product){
        return (product.quantity * product.price)
    }


    useEffect(()=>{

        const t = cart.map(p => calculateParticularProductTotal(p)).reduce((acc,val) => acc+val,0)
        setTotal(t.toFixed(2))

    },[cart])   

    function clearCart(){
        setCart([])
    }

  return (
    <div className='cart-container'>

        <div className="cart-heading">
            <h2>Your cart:</h2>
            {total > 0 && <p>Total Rs: {total}</p>}
        </div>

        <div className="cart">

            {
                cart && 
                    cart.map((product,index) => (
                        <div className="product-cart" key={index}>
                            <div className="cart-prod-image">
                                <img src={product.images[0]} alt="" />
                            </div>

                            <div className="cart-product-details">
                                <h3>Product Name: {product.title}</h3>
                                <p>Product Price Rs : {product.price}</p>
                                <p>Quantity: {product.quantity}</p>
                                <p>Total Rs: {calculateParticularProductTotal(product)}</p>
                            </div>
                        </div>
                    ))
            }
        </div>
       
        {cart.length > 0 && (
            <div className="tool-tip">
                <p>Remove all Items!</p>
                <div className='clear-cart'>
                    <button onClick={clearCart} className='clear-button'>x</button>
                </div>
                
            </div>
        )}

       
    </div>
  )
}

export default Cart