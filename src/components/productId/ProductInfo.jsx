import React from 'react'
import { useState } from 'react'
import './styles/ProductInfo.css'

const ProductInfo = ({product}) => {
    const [quantity, setQuantity] = useState(1)

    const minus = () => {
        const newValue = quantity - 1
        if (newValue >= 1)
            setQuantity(quantity - 1)
    }

    const plus = () => {
        setQuantity(quantity + 1)
    }

  return (
    <article className='productInfo'>
        <h2 className='productInfo-title'>{product?.title}</h2>
        <p className='productInfo-description'>{product?.description}</p>
        <footer className='productInfo-footer'>
            <div className='productInfo-container-price'>
                <h3 className='productInfo-price-title'>Price</h3>
                <span className='productInfo-price'>$ {product?.price}</span>
            </div>
            <div className='productInfo-container-quantity'>
                <h3 className='productInfo-quantity-title'>Quantity</h3>
                <div className='productInfo-container-counter'>
                    <div className='productInfo-minus' onClick={minus}>-</div>
                    <div className='productInfo-counter'>{quantity}</div>
                    <div className='productInfo-plus' onClick={plus}>+</div>
                </div>
            </div>
            <button className='productInfo-btn'>
                Add to cart 
                <i className='bx bx-cart'></i>
            </button>
        </footer>
    </article>
  )
}

export default ProductInfo