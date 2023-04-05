import "./style.css";
import { Link } from "react-router-dom";
import React from "react";

function SignInPage() {
  return (
    <div className='sign-page-container'>
      <div className='sign-in wrapper content'>
        <h2>Logga In</h2>

        <form action=''>
          <label htmlFor='email'>
            <p>Användarnamn</p>
            <input type='email' name='email' id='' />
          </label>

          <label htmlFor='password'>
            <p>Lösenord</p>
            <input type='password' name='password' id='' />
          </label>

          <div className='link-container'>
            <Link className='link' to={"#"}>
              <p>Har du glömt ditt lösenord?</p>
            </Link>
          </div>

          <button type='submit'>Logga in</button>
        </form>
        <div className='link-container'>
          <Link className='link' to={"#"}>
            <p>
              Har du inget konto? <span>Skapa konto</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
