
import Home from './pages/home/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/registers/Register'
import Login from './pages/logins/Login'
import AllProduct from './pages/allproduct/AllProduct'
import SingleProduct from './pages/singleproduct/SingleProduct'
import Cart from './pages/cart/Cart'
function App() {
  

  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="products" element={<AllProduct/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App
