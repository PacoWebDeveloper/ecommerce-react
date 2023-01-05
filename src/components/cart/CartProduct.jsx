import React from 'react'
import './styles/CartProduct.css'

const CartProduct = ({cartProduct}) => {
  return (
    <article className='cartProduct'>
        <h4 className='cartProduct-brand'>{cartProduct.brand}</h4>
        <h3 className='cartProduct-title'>{cartProduct.title}</h3>
        <div className='cartProduct-quantity'>
            <p>{cartProduct.productsInCart.quantity}</p>
        </div>
        <footer className='cartProduct-footer'>
            <h3 className='cartProduct-price'><span>Total:</span> ${cartProduct.price}</h3>
        </footer>
        <i className="cartProduct-trash bx bx-trash"></i>
    </article>
  )
}

export default CartProduct