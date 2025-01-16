import React from 'react'
import { allProducts } from '../../data'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/products/Product/Product'
const AllProduct = () => {
  return (
    <div>
      <Navbar/>
      <Products heading="products" items={allProducts}/>
      <Footer/>
    </div>
  )
}

export default AllProduct
