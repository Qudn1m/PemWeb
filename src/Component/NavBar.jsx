import React from 'react';
import { Link } from 'react-router-dom';
import logohome from '../Assets/Logo-Toko2.svg';
import logoproduk from '../Assets/wall-bricks-svgrepo-com.svg';
import logotentangkami from '../Assets/search-engineer-contructor-helmet-find-svgrepo-com.svg';
import Logokiriatas from './Logo kiri atas';
import '../App.css';

function NavBar({Pembuka_Contact, Contact1, Contact2, Email, Alamat, Icon}) {
  return (
<div className="top_nav__menu">
  <Logokiriatas/>
        
        <Link to="/app" title="Home">
        <img src={logohome} title='Home' alt=''></img>
          Home
        </Link>
        <Link to="/katalog-gunung" title="Katalog Gunung">
        <img src={logoproduk} title='Katalog Gunung' alt='' ></img>
          Katalog Gunung
        </Link>
        <Link to="/about-us" title="About Us">
        <img src={logotentangkami} title='About Us' alt='' ></img>
          About Us
        </Link>
        
  </div>

  );
}

export default NavBar;
