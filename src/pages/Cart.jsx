import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { buyCart, getAllCartProducts } from '../store/slices/cart.slice'
import './styles/Cart.css'

const Cart = () => {

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleBuyCart = () => {
    const data = {
      "street": "Green St. 1456",
      "colony": "Southwest",
      "zipCode": 12345,
      "city": "USA",
      "references": "Some references"
    }
    dispatch(buyCart(data))
  }

  useEffect(() => {
    dispatch(getAllCartProducts())
  }, [])
  return (
    <main className='cart'>
      <h2>My cart</h2>
      <section className='cart-list'>
        {
          cart.map(cartProduct => <CartProduct cartProduct={cartProduct} key={cartProduct.id} />)
        }
        {
          !cart.length && (
            <h2>Not found products in cart</h2>
          )
        }
      </section>
      {
        cart.length != 0 && (
          <div className='cart-btn-container'>
            <button className='cart-btn' onClick={handleBuyCart}>Buy cart</button>
          </div>
        )
      }
    </main>
  )
}

export default Cart