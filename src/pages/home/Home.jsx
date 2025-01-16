// eslint-disable-next-line no-unused-vars
import React from 'react'
import Announcement from '../../components/Announcement'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import NewArrivals from '../../components/products/NewArrivals'
import Bestsellers from '../../components/products/Bestsellers'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories />
      <NewArrivals />
      <Bestsellers/>
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}

export default Home
