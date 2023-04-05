import "./style.css";
import React from "react";

function CreateAccount() {
  return (
    <section>
      <div className='content'>
        <div className='create-account-container'>
          <h2>Ange uppgifter</h2>
          <form action=''>
            <label htmlFor='username'>
              <p>Användarnamn</p>
            </label>
            <input type='text' name='username' id='' />

            <label htmlFor='name'>
              <p>Namn</p>
            </label>
            <input type='name' name='name' id='' />

            <label htmlFor='email'>
              <p>Mail</p>
            </label>
            <input type='email' name='email' id='' />

            <label htmlFor='phone-number'>
              <p>Mobilnummer</p>
            </label>
            <input type='tel' name='phone-number' id='' />

            <label htmlFor='password'>
              <p>Lösenord</p>
            </label>
            <input type='password' name='password' id='' />

            <div className='terms-wrapper'>
              <p>
                Genom att trycka på "Registrera dig och acceptera" bekräftar du
                att du har läst <span>integritetspolicyn</span> och samtyckt
                till <span>användarvillkoren.</span>
              </p>
            </div>

            <button>Registrera & logga in</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateAccount;
