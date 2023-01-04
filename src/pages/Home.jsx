import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/home/Categories'
import ProductCard from '../components/home/ProductCard'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/Home.css'

const Home = () => {

  const [nameProduct, setNameProduct] = useState('')
  const [category, setCategory] = useState('')
  const [filterProducts, setFilterProducts] = useState([])
  const products = useSelector(state => state.products)
  
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newName = e.target.nameProduct.value
    setNameProduct(newName)
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    setFilterProducts(products)
  }, [products])

  useEffect(() => {
    const newPrducts = products.filter(product => product.title.includes(nameProduct) && (product.category.id === category || !category))
    setFilterProducts(newPrducts)
  }, [nameProduct, category])

  return (
    <main className='home'>
      <form className='home-form' onSubmit={handleSubmit}>
        <div className='home-form-div'>
          <input className='home-form-input' type="text" id='nameProduct' placeholder="What are you looking for?" />
          <button className='home-form-btn'><i className='bx bx-search-alt-2' ></i></button>
        </div>
      </form>
      <Categories setCategory={setCategory}/>
      <section className='home-containerProducts'>
        {
          filterProducts.map(product => <ProductCard key={product.id} product={product} />)
        }
      </section>
    </main>
  )
}

export default Home