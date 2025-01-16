import React from 'react'
import { newArrivals } from '../../data'
import Products from './Product/Product'
const NewArrivals = () => {
  return (
    <Products items={newArrivals} heading="new Arrivals"/>
  )
}

export default NewArrivals
