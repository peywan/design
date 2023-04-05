import './style.css';
import BackButton from '../../components/BackButton/BackButton';
import React from 'react';

function CreateAdPage() {

    const categories = [
        {
            mainCategory: 'Fordon', subCategories: [
                { value: 'Cyklar & Mopeder' },
                { value: 'Bilar' },
                { value: 'Båtar' },
                { value: 'Reservdelar' },
                { value: 'Övrigt' },
            ]
        },
        {
            mainCategory: 'Elektronik', subCategories: [
                { value: 'TV & Video' },
                { value: 'Dator & Tillbehör' },
                { value: 'Telefoner' },
                { value: 'HiFi & Musik' },
                { value: 'Övrigt' },
            ]
        },
        {
            mainCategory: 'Hem & Hushåll', subCategories: [
                { value: 'Möbler' },
                { value: 'Vitvaror' },
                { value: 'Verktyg' },
                { value: 'Övrigt' },
            ]
        },
        {
            mainCategory: 'Hobby & Fritid', subCategories: [
                { value: 'Sport' },
                { value: 'Musik' },
                { value: 'Film' },
                { value: 'Böcker' },
                { value: 'Spel' },
                { value: 'Övrigt' },
            ]
        },
        {
            mainCategory: 'Kläder & Leksaker', subCategories: [
                { value: 'Herrkläder' },
                { value: 'Damnkläder' },
                { value: 'Leksaker & Barnartiklar' },
                { value: 'Övrigt' },
            ]
        },
    ]


    return (
        <div className='create-ad-page-container'>

            <BackButton title='Skapa annons' />

            <form className='ad-content-container' action=''>

                <div className='ad-image-container'>
                    <img src="" alt="" srcset="" />
                </div>

                <div className="ad-info-container">
                    <label htmlFor="ad-title"><p>Lägg till titel</p></label>
                    <input type="text" name="ad-title" id="" />

                    <label htmlFor="ad-description"><p>Lägg till beskrivning</p></label>
                    <textarea name="ad-description" id="" cols="30" rows="10"></textarea>

                    {/* <div className="category-container"> */}
                    <label htmlFor="main-category"><p>Huvudkategori</p></label>
                    <select name="main-cat" id="">
                        <option value="">Välj Huvudkategori</option>
                        <option value="Fordon">Fordon</option>
                    </select>
                    <label htmlFor="sub-category"><p>Sub Kategori</p></label>
                    <select name="sub-cat" id="">
                        <option value="">Välj Subkategori</option>
                        <option value="Bilar">Bilar</option>
                    </select>
                    {/*  </div> */}
                </div>



                <button>Lägg till annons</button>
            </form>
        </div>
    )
}

export default CreateAdPage