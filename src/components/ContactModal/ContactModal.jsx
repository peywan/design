import React from 'react';
import './style.css';

function ContactModal({ closeModal, contactInfo }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Kontaktuppgifter</h1>
                </div>
                <div className="body">
                    <p>{contactInfo.contactMail}</p>
                    <p>{contactInfo.contactPhone}</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            closeModal(false);
                        }}
                    >
                        Stäng
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactModal