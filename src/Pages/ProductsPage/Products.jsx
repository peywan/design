
import './style.css';
import { selectLikedProducts } from '../../Redux/features/productSlice';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';


function Products() {

    const products = useSelector((state) => state.products.entities);
    const searchQuery = useSelector((state) => state.products.filter)
    const likedProducts = useSelector(selectLikedProducts);


    return (
        <section className='section'>
            <Searchbar />
            <div className="products-page-container content">
                <div className="products-wrapper">

                    {products.filter((product) => searchQuery.search ? product.title.toLowerCase().includes(searchQuery.search.toLowerCase()) : true).filter((product) => searchQuery.main ? product.mainCategory == searchQuery.main : true).filter((product) => searchQuery.sub ? product.subCategory == searchQuery.sub : true).map((item) => {
                        const isLiked = likedProducts?.some((liked) => liked == item.id)
                        return (<React.Fragment key={item.id}>
                            <ProductCard showLike={true} liked={isLiked} data={item} />
                        </React.Fragment>)
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products