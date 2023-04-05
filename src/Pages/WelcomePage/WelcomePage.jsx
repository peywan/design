import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { MdOutlineRecycling } from "react-icons/md";

function WelcomePage() {
  const options = [
    { title: "Skapa konto", id: 111, link: "/createAccount" },
    { title: "Kolla artiklar", id: 222, link: "/Products" },
    { title: "Logga in", id: 333, link: "/signIn" },
  ];

  const renderedOptions = options.map((option, index) => {
    return (
      <button
        onClick={() => {
          console.log(option.id);
        }}
        id={option.id}
      >
        <Link to={option.link} key={index}>
          {option.title}
        </Link>
      </button>
    );
  });

  return (
    <div className='welcome-page-container'>
      <div className='welcome-content-container'>
        <div className='welcome-page text-container'>
          <h2>Another man's trash, another man's treasure!</h2>
          <div className='animation-container'></div>
          <p>
            Welcome to our recycling page where we strive to provide you with
            the most informative and useful resources on recycling. We
            understand the importance of reducing waste and preserving our
            environment, which is why we have created this page to help you make
            informed decisions about how to recycle and properly dispose of your
            waste. From tips on how to reduce your carbon footprint, to
            information on how to properly sort and recycle different materials,
            we have everything you need to start making a positive impact on our
            planet. Join us in our mission to create a cleaner and healthier
            world for future generations.
          </p>
        </div>

        <div className='button-container'>{renderedOptions}</div>
      </div>
    </div>
  );
}

export default WelcomePage;
