import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'
import './styles/ProductInfo.css'

const positionImages = ['first','second','third']

const ProductInfo = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const [currentImage, setCurrentImage] = useState(0)

    const dispatch = useDispatch()

    const minus = () => {
        const newValue = quantity - 1
        if (newValue >= 1)
            setQuantity(quantity - 1)
    }

    const plus = () => {
        setQuantity(quantity + 1)
    }

    const handleAddProduct = () => {
        const data = {
            id: product.id,
            quantity: quantity
          }
          dispatch(addProductCart(data))
    }

    const handleClickLeft = () => {
        const newValue = currentImage - 1
        if (currentImage > 0)
            setCurrentImage(newValue)
        else setCurrentImage(2)
    }

    const handleClickRight = () => {
        const newValue = currentImage + 1
        if (currentImage < 2 )
            setCurrentImage(newValue)
        else setCurrentImage(0)
    }

  return (
    <article className='productInfo'>
        <div className='productInfo-slider'>
            <div className={`productInfo-slider-container ${positionImages[currentImage]}`}>
                <img src={product?.productImgs[0]} alt="" />
                <img src={product?.productImgs[1]} alt="" />
                <img src={product?.productImgs[2]} alt="" />
            </div>
            <i onClick={handleClickLeft} className='productInfo-slider-arrowLeft bx bx-chevron-left' ></i>
            <i onClick={handleClickRight} className='productInfo-slider-arrowRight bx bx-chevron-right' ></i>
        </div>
        <div className='productInfo-info'>
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
                <button className='productInfo-btn' onClick={handleAddProduct}>
                    Add to cart 
                    <i className='bx bx-cart'></i>
                </button>
            </footer>
        </div>
    </article>
  )
}

export default ProductInfo