import "./style.css";
import {
  AiOutlineHeart,
  AiOutlinePlusCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import BackButton from "../../components/BackButton/BackButton";
import React from "react";

function ProfilePage() {
  return (
    <div className='profile-container'>
      <BackButton title='Profil & Inställningar' classname='link' />
      <div className='profile-options'>
        <div className='p-description'>
          <h4>Innehåll</h4>
        </div>
        <div className='p-option liked'>
          <Link to={"/Liked"}>
            <div className='p-icon-container'>
              <AiOutlineHeart />
              <p>Gillade</p>
              <MdOutlineNavigateNext />
            </div>
          </Link>
        </div>
        <div className='p-option ads'>
          <Link to={"/MyAds"}>
            <div className='p-icon-container'>
              <AiOutlinePlusCircle />
              <p>Egna Annonser</p>
              <MdOutlineNavigateNext />
            </div>
          </Link>
        </div>
        <div className='p-option profile'>
          <Link to={"#"}>
            <div className='p-icon-container'>
              <CgProfile />
              <p>Profiluppgifter</p>
              <MdOutlineNavigateNext />
            </div>
          </Link>
        </div>

        <div className='p-description'>
          <h4>Övrigt</h4>
        </div>
        <div className='p-option about'>
          <Link to={"#"}>
            <div className='p-icon-container'>
              <AiOutlineInfoCircle />
              <p>Om WeRecycle</p>
              <MdOutlineNavigateNext />
            </div>
          </Link>
        </div>
        <div className='p-option settings'>
          <Link to={"#"}>
            <div className='p-icon-container'>
              <FiSettings />
              <p>Inställningar</p>
              <MdOutlineNavigateNext />
            </div>
          </Link>
        </div>
        <div className='p-option help'>
          <Link to={"#"}>
            <div className='p-icon-container'>
              <FiHelpCircle />
              <p>Hjälp & Support</p>
              <MdOutlineNavigateNext />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
