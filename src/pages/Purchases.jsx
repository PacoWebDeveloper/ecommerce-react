import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { getConfig } from '../utils/configAxios'

const Purchases = () => {

  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases"
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>Purchases</div>
  )
}

export default Purchases