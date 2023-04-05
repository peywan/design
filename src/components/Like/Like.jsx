import './style.css';
import { AiFillHeart } from 'react-icons/ai';
import { setLiked } from '../../Redux/features/productSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import React from 'react';


function Like({ entID, otherEntID, liked }) {
    const [toggleLike, setToggleLike] = useState(false);
    const dispatch = useDispatch();


    const setLikedProduct = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
        setToggleLike(!toggleLike);
        let likedArray; 
        let likedID = entID || otherEntID; 
        if (!localStorage.getItem('liked')) {
            //Set LocalStorage if key not found. 
            localStorage.setItem('liked', '[]');
        }
        if (localStorage.getItem('liked')) { 
            let likedStringArr = localStorage.getItem('liked');

            likedArray = JSON.parse(likedStringArr);
        }

        if (likedArray.includes(likedID)) {

            let filteredLikes = likedArray.filter((item) => item !== likedID)
            likedArray = filteredLikes;
        } else {
            likedArray.push(likedID)
        }

        likedArray = JSON.stringify(likedArray);
        localStorage.setItem('liked', likedArray);

        dispatch(setLiked(likedArray));
    }, [entID, otherEntID, dispatch])

    return (
        <div className='liked-btn' onClick={(e) => setLikedProduct(e)}>
            {}
            {liked ?
                (<AiFillHeart className='heart-red' />)
                : (<AiFillHeart className='heart-white' />)}
        </div >
    )
}

export default Like
