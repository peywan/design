import './style.css';
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md';
import React from 'react';

function BackButton({ title }) {
    const navigate = useNavigate();

    return (
        <>
            <Link className='btn-link' to={'#'} onClick={() => navigate(-1)}>
                <div className='back-btn-container'>
                    <MdArrowBackIosNew />
                    <h4>{title}</h4>
                </div>
            </Link>

        </>
    )
}

export default BackButton