import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/home/ProductCard'
import { getAllProducts } from '../store/slices/products.slice'

const Home = () => {

  const products = useSelector(state => state.products)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <main>
      <section>
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </section>
    </main>
  )
}

export default Home