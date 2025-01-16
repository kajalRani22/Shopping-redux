import React from 'react'
import Products from './Product/Product'
import { bestsellers } from '../../data'
const Bestsellers = () => {
  return (
    <Products items={bestsellers} heading="Bestsellers"/>
  )
}

export default Bestsellers
