import React from 'react'
import "./Cateogories.css"
import { Link } from 'react-router-dom'
import { categories } from '../../data'
const Categories = () => {
  return (
    <div className='categories-container'>
      {categories.map((item)=>(
        <div key={item.id} className='category-container'>
            <img src={item.img} alt=""/>
            <div className='cateogory-info'>
<h1>{item.title}</h1>
<Link to="/products">
<button>Shop Now</button></Link>
                </div>
            </div>
      ))}
    </div>
  )
}

export default Categories
