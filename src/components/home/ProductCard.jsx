import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice'
import './styles/ProductCard.css'

const ProductCard = ({product}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleClickProduct = () => {
    navigate(`/product/${product.id}`)
  } 

  const handleClickAddCart = (e) => {
    e.stopPropagation()
    const data = {
      id: product.id,
      quantity: 1
    }
    dispatch(addProductCart(data))
  }
  return (
    <article className='productCard' onClick={handleClickProduct}>
        <header className='productCard-header'>
            <img src={product.productImgs[0]} alt={product.title} />
        </header>
        <hr />
        <div className='productCard-body'>
            <h3 className='productCard-title'>{product.title}</h3>
            <h4 className='productCard-title-price'>Price</h4>
            <span className='productCard-price'>$ {product.price}</span>
            <button className='productCard-btn' onClick={handleClickAddCart}>
              <i className='bx bx-cart'></i>
            </button>
        </div>
    </article>
  )
}

export default ProductCard