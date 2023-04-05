// Importing required dependencies and components
import "./style.css";
import { BiEdit } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { selectLikedProducts } from "../../Redux/features/productSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";
import Like from "../../components/Like/Like";

// ProductComponent displays a product with its details and actions
function ProductComponent({ data }) {
  // Local states for managing modal, like status, and user login status
  const [openModal, setOpenModal] = useState(false);
  const [like, setLike] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { id } = useParams();
  const likedProducts = useSelector(selectLikedProducts);

  // Function to check if the product is liked or not
  const isLiked = likedProducts?.some((liked) => liked == data.id);

  return (
    <div className='product-container'>
      {/* Product image */}
      <div className='product-container image'>
        <img src={data.img} alt={data.title} />
      </div>

      {/* Navigation and date */}
      <div className='navigation'>
        <Link to={`/products`}>
          <FaChevronLeft className='icon-back' />
        </Link>
        {!like && <Like otherEntID={`${id}`} liked={isLiked} />}
      </div>
      {/* Text content of the product */}
      <div className='text-content'>
        <div className='title'>
          <h2>{data.title}</h2>
        </div>
        <div className='description'>
          <p>{data.textContent}</p>
        </div>
      </div>

      {/* Contact button and modal */}
      <div className='contact'>
        <button className='contact-btn' onClick={() => setOpenModal(true)}>
          <BsFillTelephoneFill />
          Kontakta annonsör
        </button>
        {openModal && (
          <ContactModal closeModal={setOpenModal} contactInfo={data} />
        )}
      </div>
    </div>
  );
}

export default ProductComponent;
