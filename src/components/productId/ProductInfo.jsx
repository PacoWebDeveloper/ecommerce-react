import React from 'react'
import { useState } from 'react'

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
    <article>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <div>
                <h3>Price</h3>
                <span>{product?.price}</span>
            </div>
            <div>
                <h3>Quantity</h3>
                <div>
                    <div onClick={minus}>-</div>
                    <div>{quantity}</div>
                    <div onClick={plus}>+</div>
                </div>
            </div>
            <button>
                Add to cart 
                <i className='bx bx-cart'></i>
            </button>
        </footer>
    </article>
  )
}

export default ProductInfo