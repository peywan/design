import './style.css';
import { Link } from 'react-router-dom';
import Like from '../../components/Like/Like';
import React from 'react';


function ProductCard({ data, showLike, liked }) {
    return (

        <Link className='product-card' to={`/Product/${data.id}`}  >
            <div className="item-container">
                <div className="image-container">
                    <img src={data.img} alt={data.title} />
                </div>
                <div className='text-container'>
                    <h4>{data.title}</h4>
                    <p>{data.textContent}</p>
                    <div className="like-date">
                        <p>{data.dateCreated}</p>
                        {showLike && <Like entID={data.id} liked={liked} />}


                    </div>
                </div>

            </div>
        </Link>
    )
}

export default ProductCard