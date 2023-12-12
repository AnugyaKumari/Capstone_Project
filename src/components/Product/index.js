import React, { useEffect, useState } from 'react'
import CustomCard from './CustomCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('./Data/product.json').then(res => setProductList(res.data.product)).catch(e => console.log(e))
  }, [])

  const handleChangeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }
  return (
    <div>
      <div className={'px-12'}>
        <input value={filter} onChange={handleChangeFilter} placeholder={"search brand, product"}/>
        <button> 🔍</button>
      </div>
      <div className={'p-8 flex flex-wrap'}>
        {productList.filter(e => e.title.toLowerCase().includes(filter.toLocaleLowerCase()))?.map(i => <Link to={`/product/${i.articleCode}`}><CustomCard item={i} /></Link>)}
      </div>
    </div>
  )
}


export default Product
