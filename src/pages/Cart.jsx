import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllCartProducts } from '../store/slices/cart.slice'

const Cart = () => {

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCartProducts())
  }, [])
  return (
    <main>
      <section>
        {
          cart.map(cartProduct => <CartProduct cartProduct={cartProduct} key={cartProduct.id} />)
        }
      </section>
    </main>
  )
}

export default Cart