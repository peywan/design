import "./style.css";
import { BsFilterRight } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { setFilter } from "../../Redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import React from "react";

function Searchbar() {
  const dispatch = useDispatch();
  const globalCategory = useSelector((state) => state.products.filter);
  const [filter, ToggleFilter] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState({
    main: "",
    sub: "",
    search: "",
  });

  const setCategories = (e) => {
    setSubCategory(
      categories.find((category) => category.mainCategory === e.target.value)
    );
    setSelectedCategories({
      ...selectedCategories,
      main: e.target.value,
      sub: "",
    });
  };

  const setSearchQuery = (e) => {
    setSelectedCategories({ ...selectedCategories, search: e.target.value });
  };

  const categories = [
    {
      mainCategory: "Fordon",
      subCategories: [
        { value: "Cyklar & Mopeder" },
        { value: "Bilar" },
        { value: "Båtar" },
        { value: "Reservdelar" },
        { value: "Övrigt" },
      ],
    },
    {
      mainCategory: "Elektronik",
      subCategories: [
        { value: "TV & Video" },
        { value: "Dator & Tillbehör" },
        { value: "Telefoner" },
        { value: "HiFi & Musik" },
        { value: "Övrigt" },
      ],
    },
    {
      mainCategory: "Hem & Hushåll",
      subCategories: [
        { value: "Möbler" },
        { value: "Vitvaror" },
        { value: "Verktyg" },
        { value: "Övrigt" },
      ],
    },
    {
      mainCategory: "Hobby & Fritid",
      subCategories: [
        { value: "Sport" },
        { value: "Musik" },
        { value: "Film" },
        { value: "Böcker" },
        { value: "Spel" },
        { value: "Övrigt" },
      ],
    },
    {
      mainCategory: "Kläder & Leksaker",
      subCategories: [
        { value: "Herrkläder" },
        { value: "Damnkläder" },
        { value: "Leksaker & Barnartiklar" },
        { value: "Övrigt" },
      ],
    },
  ];

  useEffect(() => {
    dispatch(setFilter(selectedCategories));
  }, [
    selectedCategories.main,
    selectedCategories.sub,
    selectedCategories.search,
    dispatch,
  ]);

  return (
    <div className='searchbar-container'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='filter-container'>
          <div className='search-wrapper'>
            {/* On change we save the the selectedCategory.search which contains the string*/}
            <input
              className='text-input'
              value={selectedCategories.search}
              onChange={(e) => setSearchQuery(e)}
              placeholder='Search...'
              type='text'
            ></input>
            <FaSearch />
          </div>
          {/* Functionallity for showing a closing filter. */}
          {filter && (
            <button
              className='btn-filter'
              onClick={() => {
                ToggleFilter(!filter);
                setSelectedCategories({ main: "", sub: "", search: "" });
              }}
            >
              <MdClear />
            </button>
          )}
          <button
            className='btn-filter'
            onClick={() => {
              ToggleFilter(!filter);
            }}
          >
            <BsFilterRight />
          </button>
        </div>

        {filter && (
          <div className='category-select-container'>
            <label htmlFor='mainCategory'>
              {/* Value of select takes the redux initialState filter value.  */}
              {/* We run the function setCategories that takes the event. Inside the setCategory function we set the subCategory by finding the correct subCategory by filtering the category-object and match it to the e.target.value and set the return value. */}
              <select
                value={globalCategory.main}
                onChange={(e) => setCategories(e)}
                name='mainCategory'
                id='mainCategory'
              >
                <option value=''>Huvudkategori</option>
                {/* Here we just map out the mainCategories, the value set here will map out the correct subCategory for picked mainCategory */}
                {categories.map((item, i) => {
                  return (
                    <option key={i} value={item.mainCategory}>
                      {item.mainCategory}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        )}

        {/* If there the mainCategory has been set and the filter is true, we show this. */}
        {globalCategory.main && filter && (
          <div className='category-select-container'>
            <label htmlFor='subCategory'>
              {/* If you look at the globalCategory, it consists of multiple objects.
                            One object consists of a mainCategory + subCategory. */}
              <select
                value={globalCategory.sub}
                onChange={(e) =>
                  setSelectedCategories({
                    ...selectedCategories,
                    sub: e.target.value,
                  })
                }
                name='subCategory'
                id='mainCategory'
              >
                <option value=''>Subkategori</option>
                {}
                {subCategory?.subCategories.map((item, i) => {
                  return (
                    <option key={i} value={item.value}>
                      {item.value}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        )}
      </form>
      <div></div>
    </div>
  );
}

export default Searchbar;
