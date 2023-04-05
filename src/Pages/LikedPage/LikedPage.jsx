import './style.css';
import { selectLikedProducts, selectProducts } from '../../Redux/features/productSlice';
import { useSelector } from 'react-redux';
import BackButton from '../../components/BackButton/BackButton';
import ProductCard from '../../components/ProductCard/ProductCard';
import React from 'react';


function LikedPage() {
    //Get and saves the likedProducts array from Redux to liked-variable. 
    const liked = useSelector(selectLikedProducts);
    //Get all products via redux and save it to products.
    const products = useSelector(selectProducts);
    //Take the products and filter them to only show those that are liked. 
    const filteredArray = products.filter(item => liked?.includes(item.id));


    return (
        <section>
            <div className="content">
                <div className='liked-container'>
                    <BackButton title='Gillade' />
                    <div className="liked-product-wrapper">
                        {/* If there are no liked products, show message. */}
                        {!liked ? <h4>Inga gillade produkter</h4> :
                            /* If there are liked products, map the array via ProductCard-component */
                            filteredArray.map((item, index) => {
                                return (<ProductCard data={item} />)
                            })}
                        {/* test */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LikedPage
