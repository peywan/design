// Import required modules
import "./style.css";
import { selectProductById } from "../../Redux/features/productSlice";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import ProductComponent from "../../components/Product/ProductComponent";
import React from "react";

// Define Product component
function Product() {
  // Get product ID from URL parameters
  let { id } = useParams();

  // Get product details from the store
  const product = useSelector((state) => selectProductById(state, id));

  // Render product component with product details
  return (
    <section className='section'>
      <div className='single-product-page-container content'>
        <ProductComponent data={product} />
      </div>
    </section>
  );
}

// Export Product component
export default Product;
