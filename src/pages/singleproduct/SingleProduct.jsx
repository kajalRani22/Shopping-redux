import React,{useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import { allProducts } from "../../data";
import { useParams } from "react-router-dom";
import "./SingleProduct.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import Footer from "../../components/Footer/Footer";

const SingleProduct = () => {
    const dispatch = useDispatch()
    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
    }
  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id)); // Ensure id is parsed as an integer
  const colors = ["red", "purple", "teal", "green", "black"];
  const [selectedColor, setSelectedColor] = useState(null)
  const handleCircleClick= (color)=>{
    setSelectedColor(color)
  }
  const sizes = ["xs", "s", "m", "l", "xl"];
const [selectedSize,setSelectedSize] = useState(null)
const handleSizeClick = (size)=>{

setSelectedSize(size)}
  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="singleProduct-container">
      <Navbar />
      <div className="singleProduct-wrapper">
        <div className="singleProduct-imageSection">
          <img src={product.img} alt={product.title} className="singleProduct-image" />
        </div>
        <div className="singleProduct-infoSection">
          <h2 className="singleProduct-title">{product.title}</h2>
          <p className="singleProduct-number">${product.price}</p>
          <h4 className="description-title">Description</h4>
          <p className="singleProduct-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae et dolore quos!
            Molestiae animi similique tempora quisquam dignissimos autem distinctio maiores.
          </p>
          <div className="singleProduct-options">
            <div className="colors-section">
              <h4>Colors</h4>
              <div className="colors">
                {colors.map((color) => (
                  <div key={color} className="color-circle" style={{ backgroundColor: color , outline: selectedColor===color ? `3px solid ${color}` : ""}}onClick={()=>handleCircleClick(color)}></div>
                ))}
              </div>
            </div>
            <div className="sizes-section">
              <h4>Size</h4>
              <div className="sizes">
                {sizes.map((size) => (
                  <span key={size} style={{border: selectedSize===size ? "1px solid #ccc": ""}} onClick={()=> handleSizeClick(size)}>{size}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="addToCart">
            <button onClick={()=> handleAddToCart(product)}>Add to cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
