import './style.css';
import BackButton from '../../components/BackButton/BackButton';
import React from 'react';

function MyAdsPage() {
    return (
        <div className='my-ads-container'>
            <BackButton title={'Egna annonser'} />
            <div className="my-ads-product-container">
                {/* Populate with map? */}
            </div>
        </div>
    )
}

export default MyAdsPage