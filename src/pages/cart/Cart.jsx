import "react";
import "./Cart.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/CartSlice";
import { IoClose } from "react-icons/io5";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const totalPrice = (cartItems || []).reduce(
    (acc, item) => acc + item.price * item.quantity,0
    
  );
  
  
  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div className="cart-title-container">
          <BiShoppingBag className="cart-icon" />
          <h2 className="cart-title ">Shopping Cart</h2>
        </div>
        {cartItems.length === 0 ? (
          <h1 style={{color:"red", alignItems:"center", justifyContent:"center", display:"flex"}}>Your CART is empty</h1>
        ) : (
          <>
            <div className="cart-content">
              <div className="cart-items-section">
                <div className="cart-header">
                  <div className="header-item">Product</div>
                  <div className="header-item">Price</div>
                  <div className="header-item">Quantity</div>
                  <div className="header-item">Total</div>
                </div>
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <div className="cart-product">
                      <img
                        src={item.img}
                        alt=""
                        className="cart-product-image"
                      />
                      <p>{item.title}</p>
                    </div>
                    <div className="cart-price">₹{item.price}</div>
                    <div className="cart-quantity">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item))}
                      ><GrFormSubtract size={20} /></button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item))}
                      ><IoIosAdd size={20}/></button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      <IoClose size={20} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h3 className="Summary-title">OrderSummary</h3>
                <div className="summary-details">
                  <div className="summary-item">
                    <span>Price:</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="summary-item">
                    <span>Delivery:</span>
                    <span>Free</span>
                  </div>
                  <div className="summary-item">
                    <span>Total:</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button className="checkout-btn">Procced to checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
