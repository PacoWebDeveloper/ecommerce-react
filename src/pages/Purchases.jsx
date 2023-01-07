import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { getConfig } from '../utils/configAxios'
import PurchaseCard from '../components/purchases/purchaseCard'
import './styles/Purchases.css'

const Purchases = () => {

  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases"
    axios.get(URL, getConfig())
      .then(res => {
        const newPurchases = res.data.data.purchases.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        setPurchases(res.data.data.purchases)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className='purchases'>
      <h2>My purchases</h2>
      <section className='purchases-list'>
        {
          purchases.map(purchase => <PurchaseCard key={purchase.id} purchase={purchase} />)
        }
      </section>
    </main>
  )
}

export default Purchases